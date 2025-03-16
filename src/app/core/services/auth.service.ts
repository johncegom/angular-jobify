// Angular and Firebase imports
import { inject, Injectable, signal } from '@angular/core';
import {
  Auth,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from '@angular/fire/auth';

// Firestore imports
import {
  Firestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  serverTimestamp,
} from '@angular/fire/firestore';

// Angular Router import
import { Router } from '@angular/router';

// RxJS imports
import { Observable, from, of, throwError } from 'rxjs';
import { switchMap, catchError, map, tap } from 'rxjs/operators';

// Model imports
import { User } from '../models/user.model';
import { UserRole } from '../models/roles.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  private firestore = inject(Firestore);
  private router = inject(Router);

  // Add signal for current user
  currentUser = signal<User | null>(null);
  error = signal<string | null>(null);

  constructor() {
    // Subscribe to Firebase auth state changes
    onAuthStateChanged(this.auth, (firebaseUser) => {
      if (firebaseUser) {
        // User is signed in
        // Create a basic user object with information from Auth service
        const basicUser: User = {
          uid: firebaseUser.uid,
          email: firebaseUser.email ?? '',
          displayName: firebaseUser.displayName || '',
          photoURL: firebaseUser.photoURL || '',
          role: UserRole.JOB_SEEKER, // Set default role for new users
        };

        // Reference to user's document in Firestore
        const userDocRef = doc(this.firestore, 'users', firebaseUser.uid);

        // Fetch additional user data from Firestore
        getDoc(userDocRef)
          .then((docSnap) => {
            if (docSnap.exists()) {
              // If user document exists, merge Firestore data with basic auth data
              const userData = docSnap.data();
              this.currentUser.set({
                ...basicUser,
                ...userData,
                role: userData['role'] || basicUser.role, // Use role from Firestore if available
              });
            } else {
              // If no Firestore document exists yet, use basic auth data
              this.currentUser.set(basicUser);
            }
          })
          .catch((err) => {
            // Handle any errors when fetching Firestore data
            console.error('Error fetching user data:', err);
            this.currentUser.set(basicUser); // Fall back to basic user data
          });

        // Clear any previous authentication errors
        this.error.set(null);
      } else {
        // User is signed out
        this.currentUser.set(null);
      }
    });
  }

  isAuthenticated(): boolean {
    return !!this.currentUser();
  }
}
