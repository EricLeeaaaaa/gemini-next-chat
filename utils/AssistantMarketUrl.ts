// utils/AssistantMarketUrl.ts

class AssistantMarketUrl {
  private readonly baseUrl: string;
  private readonly useProxy: boolean;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || '';
    this.useProxy = this.baseUrl.includes('npmmirror.com');
  }

  private buildUrl(path: string): string {
    const fullUrl = this.baseUrl + path;
    if (this.useProxy) {
      return `/api/proxy?url=${encodeURIComponent(fullUrl)}`;
    }
    return fullUrl;
  }

  getIndexUrl(lang: string = 'en-US') {
    if (this.baseUrl.endsWith('.json')) {
      if (this.useProxy) {
        return `/api/proxy?url=${encodeURIComponent(this.baseUrl)}`;
      }
      return this.baseUrl;
    }

    let path = '';
    if (lang === 'zh-CN' || lang === 'zh') {
      path = '/index.zh-CN.json';
    } else if (lang === 'en-US') {
      path = '/index.json';
    } else if (lang === 'ar-SA') {
      path = '/index.ar.json';
    } else {
      path = `/index.${lang}.json`;
    }
    return this.buildUrl(path);
  }

  getAssistantUrl(identifier: string, lang: string = 'en-US') {
    let path = '';
    if (lang === 'zh-CN' || lang === 'zh') {
      path = `/${identifier}.zh-CN.json`;
    } else if (lang === 'en-US') {
      path = `/${identifier}.json`;
    } else if (lang === 'ar-SA') {
      path = `/${identifier}.ar.json`;
    } else {
      path = `/${identifier}.${lang}.json`;
    }
    return this.buildUrl(path);
  }
}

export default AssistantMarketUrl;
