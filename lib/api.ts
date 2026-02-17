/**
 * API Client for Job Portal Backend Services
 * All microservices endpoints in one place
 */

// Service Base URLs from environment
const API_ENDPOINTS = {
  auth: process.env.NEXT_PUBLIC_AUTH_SERVICE || 'http://localhost:8001',
  jobs: process.env.NEXT_PUBLIC_JOBS_SERVICE || 'http://localhost:8002',
  applications: process.env.NEXT_PUBLIC_APPLICATIONS_SERVICE || 'http://localhost:8003',
  aiResume: process.env.NEXT_PUBLIC_AI_RESUME_SERVICE || 'http://localhost:8004',
  aiCareer: process.env.NEXT_PUBLIC_AI_CAREER_SERVICE || 'http://localhost:8005',
  payments: process.env.NEXT_PUBLIC_PAYMENTS_SERVICE || 'http://localhost:8006',
  notifications: process.env.NEXT_PUBLIC_NOTIFICATIONS_SERVICE || 'http://localhost:8007',
  fileStorage: process.env.NEXT_PUBLIC_FILE_STORAGE_SERVICE || 'http://localhost:8008',
};

// API Client with authentication
class ApiClient {
  private getAuthToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('auth_token');
    }
    return null;
  }

  private async request(url: string, options: RequestInit = {}) {
    const token = this.getAuthToken();
    
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string>),
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Request failed' }));
      throw new Error(error.message || `HTTP ${response.status}`);
    }

    return response.json();
  }

  // Auth Service
  async register(data: { email: string; password: string; full_name: string; role: string }) {
    return this.request(`${API_ENDPOINTS.auth}/auth/register`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async login(data: { email: string; password: string }) {
    const result = await this.request(`${API_ENDPOINTS.auth}/auth/login`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    
    if (result.access_token && typeof window !== 'undefined') {
      localStorage.setItem('auth_token', result.access_token);
    }
    
    return result;
  }

  async logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_token');
    }
  }

  // Jobs Service
  async getJobs(params?: { q?: string; location?: string; job_type?: string }) {
    const queryString = params ? `?${new URLSearchParams(params as any).toString()}` : '';
    return this.request(`${API_ENDPOINTS.jobs}/jobs${queryString}`);
  }

  async getJobById(id: number) {
    return this.request(`${API_ENDPOINTS.jobs}/jobs/${id}`);
  }

  async createJob(data: any) {
    return this.request(`${API_ENDPOINTS.jobs}/jobs`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Applications Service
  async applyToJob(jobId: number, data: { cover_letter?: string }, resume: File) {
    const formData = new FormData();
    formData.append('resume', resume);
    
    return fetch(`${API_ENDPOINTS.applications}/applications`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.getAuthToken()}`,
      },
      body: formData,
    }).then(res => res.json());
  }

  async getMyApplications() {
    return this.request(`${API_ENDPOINTS.applications}/applications/candidate`);
  }

  // AI Resume Service
  async analyzeResume(data: { resume_url: string; job_description: string }) {
    return this.request(`${API_ENDPOINTS.aiResume}/ai/analyze-resume`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // AI Career Service
  async getCareerGuidance(candidateId: number) {
    return this.request(`${API_ENDPOINTS.aiCareer}/ai/career-guidance`, {
      method: 'POST',
      body: JSON.stringify({ candidate_id: candidateId }),
    });
  }

  // Payments Service
  async createSubscription(plan: 'basic' | 'pro' | 'enterprise') {
    return this.request(`${API_ENDPOINTS.payments}/subscriptions/create`, {
      method: 'POST',
      body: JSON.stringify({ plan }),
    });
  }

  async verifyPayment(data: { order_id: string; payment_id: string; signature: string }) {
    return this.request(`${API_ENDPOINTS.payments}/subscriptions/verify`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async simulatePayment(orderId: string, shouldSucceed: boolean = true) {
    return this.request(
      `${API_ENDPOINTS.payments}/payments/simulate?order_id=${orderId}&should_succeed=${shouldSucceed}`,
      { method: 'POST' }
    );
  }

  // File Storage Service
  async uploadFile(file: File, fileType: string = 'resume') {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('file_type', fileType);

    return fetch(`${API_ENDPOINTS.fileStorage}/files/upload`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.getAuthToken()}`,
      },
      body: formData,
    }).then(res => res.json());
  }

  // Notifications Service
  async getNotifications(userId: number) {
    return this.request(`${API_ENDPOINTS.notifications}/notifications/in-app?user_id=${userId}`);
  }

  // Health Check - Test all services
  async healthCheck() {
    const services = Object.entries(API_ENDPOINTS);
    const results = await Promise.allSettled(
      services.map(([name, url]) =>
        fetch(url).then(res => ({ name, status: res.ok ? 'online' : 'error' }))
      )
    );

    return results.map((result, index) => ({
      service: services[index][0],
      url: services[index][1],
      status: result.status === 'fulfilled' ? result.value.status : 'offline',
    }));
  }
}

// Export singleton instance
export const api = new ApiClient();

// Export endpoints for direct use
export { API_ENDPOINTS };
