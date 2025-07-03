// Groq API Integration Service
// This service handles communication with Groq API for AI-powered chatbot responses

interface GroqMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface GroqResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

class GroqApiService {
  private apiKey: string;
  private baseUrl: string;
  private model: string;
  private systemPrompt: string;

  constructor() {
    // In production, store this in environment variables
    this.apiKey = import.meta.env.VITE_GROQ_API_KEY || '';
    this.baseUrl = 'https://api.groq.com/openai/v1';
    this.model = 'mixtral-8x7b-32768'; // Fast and capable model
    
    // System prompt that gives the AI context about UPSTRAIQ
    this.systemPrompt = `You are UPSTRAIQ's AI Assistant, a helpful and knowledgeable chatbot representing a leading AI-powered digital transformation company.

COMPANY INFORMATION:
- UPSTRAIQ specializes in AI-powered digital transformation services
- We have completed 1,500+ successful projects with 300% average ROI
- 4.9/5 client satisfaction rating and 99% project success rate
- We serve Technology, E-commerce, Education, Healthcare, Finance, and Manufacturing industries

SERVICES WE OFFER (12 core services):
1. AI Marketing Automation (6-8 weeks, $2,500-5,000)
2. E-commerce Platforms (8-12 weeks, $3,500-7,500)
3. Educational Platforms (10-14 weeks, $4,000-8,000)
4. Developer Portfolios (2-3 weeks, $800-2,500)
5. Web Applications (12-16 weeks, $8,000-15,000)
6. Mobile Applications (14-18 weeks, $12,000-20,000)
7. CRM Platforms (10-12 weeks, $5,000-10,000)
8. AI Chatbots (4-6 weeks, $2,000-4,500)
9. GPS Tracking Solutions (8-10 weeks, $3,000-6,000)
10. Blockchain Applications (16-20 weeks, $15,000-30,000)
11. ML Model Development (12-16 weeks, $8,000-15,000)
12. AI Model Deployment (4-6 weeks, $3,000-6,000)

CASE STUDIES:
- TechCorp: 300% ROI increase with AI marketing automation
- Fashion Forward: 500% sales growth with AI e-commerce platform
- EduTech Academy: 85% student engagement boost with personalized learning
- GrowthCorp: 400% lead conversion improvement with intelligent CRM
- FitTrack: 2M+ mobile app downloads with gamified fitness experience
- SupportPro: 90% automated query resolution with AI chatbots

TECHNOLOGIES:
Frontend: React, Next.js, Vue.js, React Native
Backend: Node.js, Python, PostgreSQL, MongoDB
AI/ML: TensorFlow, PyTorch, OpenAI, Custom Models
Cloud: AWS, Azure, Docker, Kubernetes
Blockchain: Solidity, Web3.js, Ethereum, Polygon

CONTACT INFORMATION:
Email: info@upstraiq.com
Phone: +1 (555) 123-4567

PERSONALITY & GUIDELINES:
- Be helpful, professional, and knowledgeable
- Provide specific information about services, pricing, and timelines
- Use emojis sparingly but effectively to enhance readability
- Always offer to help with next steps or connect them with sales
- Keep responses concise but informative
- Focus on business value and ROI
- If asked about competitors, redirect to UPSTRAIQ's unique value propositions
- Always maintain a positive, solution-oriented tone`;
  }

  async generateResponse(userMessage: string, conversationHistory: GroqMessage[] = []): Promise<string> {
    if (!this.apiKey) {
      throw new Error('Groq API key not configured');
    }

    try {
      const messages: GroqMessage[] = [
        { role: 'system', content: this.systemPrompt },
        ...conversationHistory,
        { role: 'user', content: userMessage }
      ];

      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: this.model,
          messages: messages,
          max_tokens: 1000,
          temperature: 0.7,
          top_p: 0.9,
          stream: false
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`Groq API error: ${response.status} ${response.statusText} - ${JSON.stringify(errorData)}`);
      }

      const data: GroqResponse = await response.json();
      
      if (!data.choices || data.choices.length === 0) {
        throw new Error('No response generated from Groq API');
      }

      return data.choices[0].message.content.trim();
    } catch (error) {
      console.error('Groq API Error:', error);
      
      // Provide fallback responses for common queries
      const fallbackResponse = this.getFallbackResponse(userMessage);
      if (fallbackResponse) {
        return fallbackResponse;
      }
      
      throw error;
    }
  }

  private getFallbackResponse(userMessage: string): string | null {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do')) {
      return "We offer 12 comprehensive AI-powered services including AI Marketing Automation, E-commerce Platforms, Educational Platforms, Web & Mobile Applications, CRM Platforms, AI Chatbots, and more. Each service is designed to transform your business with cutting-edge AI technology. Would you like details about any specific service?";
    }
    
    if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return "Our pricing ranges from $800 for developer portfolios to custom enterprise solutions. Typical projects range from $2,500-$20,000 depending on complexity. All projects include consultation, development, testing, and deployment. Would you like a custom quote for your specific needs?";
    }
    
    if (lowerMessage.includes('contact')) {
      return "You can reach us at info@upstraiq.com or +1 (555) 123-4567. We offer free consultations to discuss your project requirements and provide custom proposals. Ready to start your AI transformation?";
    }
    
    return null;
  }

  // Method to validate API configuration
  async validateApiKey(): Promise<boolean> {
    if (!this.apiKey) return false;
    
    try {
      const response = await fetch(`${this.baseUrl}/models`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });
      return response.ok;
    } catch {
      return false;
    }
  }

  // Method to get available models
  async getAvailableModels(): Promise<string[]> {
    try {
      const response = await fetch(`${this.baseUrl}/models`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        return data.data?.map((model: any) => model.id) || [];
      }
    } catch (error) {
      console.error('Error fetching models:', error);
    }
    
    return ['mixtral-8x7b-32768', 'llama2-70b-4096', 'gemma-7b-it'];
  }
}

// Export singleton instance
export const groqApiService = new GroqApiService();
export default groqApiService;