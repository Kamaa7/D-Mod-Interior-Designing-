import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });

    // Log to error reporting service (if you have one)
    // Example: Sentry.captureException(error);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI with glassmorphism
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-orange-50 px-4 py-12">
          <div className="max-w-2xl w-full">
            <div className="glass-card rounded-3xl p-8 sm:p-12 space-y-6 text-center">
              {/* Error Icon */}
              <div className="flex justify-center">
                <div className="glass-glow-blue rounded-full p-6">
                  <AlertTriangle className="w-16 h-16 text-red-500" />
                </div>
              </div>

              {/* Error Message */}
              <div className="space-y-3">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                  Oops! Something went wrong
                </h1>
                <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto">
                  We're sorry for the inconvenience. An unexpected error has occurred.
                </p>
              </div>

              {/* Error Details (Development Only) */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="text-left bg-red-50 p-4 rounded-lg border border-red-200">
                  <summary className="cursor-pointer text-sm font-medium text-red-800 mb-2">
                    Error Details (Development Mode)
                  </summary>
                  <div className="text-xs text-red-700 space-y-2">
                    <p className="font-mono bg-white p-2 rounded border border-red-200 overflow-auto">
                      {this.state.error.toString()}
                    </p>
                    {this.state.errorInfo && (
                      <pre className="font-mono bg-white p-2 rounded border border-red-200 overflow-auto max-h-48 text-xs">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    )}
                  </div>
                </details>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button
                  onClick={this.handleReload}
                  className="w-full sm:w-auto glass-button text-white px-6 py-6 sm:py-3 rounded-lg font-medium hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-5 h-5" />
                  Reload Page
                </Button>

                <Button
                  onClick={this.handleGoHome}
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-primary text-primary px-6 py-6 sm:py-3 rounded-lg font-medium hover:bg-primary hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Home className="w-5 h-5" />
                  Go to Home
                </Button>
              </div>

              {/* Help Text */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  If this problem persists, please{' '}
                  <a
                    href="/contact"
                    className="text-primary hover:underline font-medium"
                  >
                    contact our support team
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

