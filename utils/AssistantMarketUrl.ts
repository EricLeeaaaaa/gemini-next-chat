// u14app-gemini-next-chat/utils/AssistantMarketUrl.ts

class AssistantMarketUrl {
  private readonly baseUrl: string
  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || ''
  }

  getIndexUrl(lang: string = 'en-US') {
    // 关键修复：如果基础URL已经是一个.json文件，直接返回它，不再拼接
    if (this.baseUrl.endsWith('.json')) {
      return this.baseUrl;
    }

    // 如果基础URL是一个目录，则执行原来的拼接逻辑
    if (lang === 'zh-CN' || lang === 'zh') {
      return this.baseUrl + '/index.zh-CN.json';
    }
    if (lang === 'en-US') {
      return this.baseUrl + '/index.json';
    }
    if (lang === 'ar-SA') {
      return this.baseUrl + '/index.ar.json';
    }
    return this.baseUrl + '/index.' + lang + '.json';
  }

  getAssistantUrl(identifier: string, lang: string = 'en-US') {
    if (lang === 'zh-CN' || lang === 'zh') {
      return this.baseUrl + '/' + identifier + '.zh-CN.json';
    }
    if (lang === 'en-US') {
      return this.baseUrl + '/' + identifier + '.json';
    }
    if (lang === 'ar-SA') {
      return this.baseUrl + '/' + identifier + '.ar.json';
    }
    return this.baseUrl + '/' + identifier + '.' + lang + '.json';
  }
}

export default AssistantMarketUrl
