"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { app } from '../firebaseConfig'
import { useRouter } from 'next/navigation'
import { signOut } from 'firebase/auth'

const styles = {
  container: {
    minHeight: '100vh',
    background: '#000', // Changed to black
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontFamily: 'Segoe UI, Arial, sans-serif',
  },
  card: {
    background: 'rgba(44, 0, 62, 0.85)',
    padding: '2rem 3rem',
    borderRadius: '16px',
    boxShadow: '0 8px 32px 0 rgba(44,0,62,0.37)',
    textAlign: 'center',
    minWidth: '320px',
  },
  button: {
    background: 'linear-gradient(90deg, #a4508b 0%, #5f0a87 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '0.75rem 2rem',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '1.5rem',
    transition: 'background 0.3s',
    boxShadow: '0 2px 8px rgba(44,0,62,0.15)',
  },
  buttonHover: {
    background: 'linear-gradient(90deg, #5f0a87 0%, #a4508b 100%)',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    letterSpacing: '2px',
  },
  welcome: {
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
  }
};

const Dashboard = () => {
  const router = useRouter();
  const auth = getAuth(app);
  const [guser, setGuser] = useState(null);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setGuser(user);
      } else {
        router.push("/");
      }
    })
  
    return () => unsubscribe();
  }, [auth, router]);

  const handleLogout = () => {
    try {
      signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Dashboard</h1>
        {guser && (
          <div>
            <p style={styles.welcome}>Welcome, <b>{guser.email.split('@')[0]}</b></p>
            <button
              style={isHover ? { ...styles.button, ...styles.buttonHover } : styles.button}
              onClick={handleLogout}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              Logout
            </button>
          </div>
        )} 
      </div>
    </div>
  )
}

export default Dashboard
