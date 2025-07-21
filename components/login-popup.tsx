// components/login-popup.tsx
"use client"

import { X } from "lucide-react"
import { useEffect, useState } from "react"
import { useUser } from "@/app/context/UserContext"

interface LoginPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function LoginPopup({ isOpen, onClose }: LoginPopupProps) {
  const [isLoginMode, setIsLoginMode] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobile: '',
    location: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const { login, register } = useUser()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
      // Reset form when closing
      setFormData({
        name: '',
        email: '',
        password: '',
        mobile: '',
        location: ''
      })
      setError('')
      setIsLoginMode(true)
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      if (isLoginMode) {
        const success = await login(formData.email, formData.password)
        if (success) {
          onClose()
        } else {
          setError('Invalid email or password')
        }
      } else {
        // Validate registration data
        if (!formData.name.trim()) {
          setError('Name is required')
          return
        }
        
        const success = await register(formData)
        if (success) {
          setIsLoginMode(true)
          setError('')
          setFormData({
            name: '',
            email: formData.email, // Keep email for login
            password: '',
            mobile: '',
            location: ''
          })
          // You can replace alert with a toast notification
          alert('Account created successfully! Please login with your credentials.')
        } else {
          setError('Registration failed. Email may already be in use.')
        }
      }
    } catch (error) {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear error when user starts typing
    if (error) {
      setError('')
    }
  }

  const handleModeSwitch = (loginMode: boolean) => {
    setIsLoginMode(loginMode)
    setError('')
    // Clear password when switching modes for security
    setFormData({
      ...formData,
      password: ''
    })
  }

  const handleClose = () => {
    if (!loading) {
      onClose()
    }
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && !loading) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-medium text-gray-900">
              {isLoginMode ? 'Welcome Back' : 'Create Account'}
            </h2>
            <button
              onClick={handleClose}
              disabled={loading}
              className="text-gray-500 hover:text-gray-700 transition-colors disabled:opacity-50"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Toggle buttons */}
          <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
            <button
              type="button"
              onClick={() => handleModeSwitch(true)}
              disabled={loading}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors disabled:opacity-50 ${
                isLoginMode 
                  ? 'bg-white text-amber-900 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => handleModeSwitch(false)}
              disabled={loading}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors disabled:opacity-50 ${
                !isLoginMode 
                  ? 'bg-white text-amber-900 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Register
            </button>
          </div>

          {/* Error message */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLoginMode && (
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={loading}
                  className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
            )}

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={loading}
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                placeholder="Password (min 6 characters) *"
                value={formData.password}
                onChange={handleInputChange}
                required
                minLength={6}
                disabled={loading}
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              />
              {!isLoginMode && (
                <p className="text-xs text-gray-500 mt-1">
                  Password must be at least 6 characters long
                </p>
              )}
            </div>

            {!isLoginMode && (
              <>
                <div>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number (Optional)"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    disabled={loading}
                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="location"
                    placeholder="Location (Optional)"
                    value={formData.location}
                    onChange={handleInputChange}
                    disabled={loading}
                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
              </>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-amber-900 text-white py-3 rounded-md hover:bg-amber-800 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Please wait...</span>
                </>
              ) : (
                <span>{isLoginMode ? 'Sign In' : 'Create Account'}</span>
              )}
            </button>
          </form>

          {/* Additional Info */}
          <div className="mt-4 text-center text-xs text-gray-500">
            {isLoginMode ? (
              <p>Don't have an account? Click Register above.</p>
            ) : (
              <p>Already have an account? Click Login above.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
