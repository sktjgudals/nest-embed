import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmbedService } from './embed.service';

@Controller('embed')
export class EmbedController {
  constructor(private readonly embedService: EmbedService) {}

  @Get()
  get(): string {
    return 'Working api';
  }

  @Post()
  searchEmbed(@Body() data) {
    try {
      const domain = data.url.split('//')[1].split('/')[0];
      if (domain) {
        if (domain.includes('www.youtube.com')) {
          return this.embedService.getYouTube(data.url);
        } else if (domain.includes('twitter.com')) {
          return this.embedService.getTwitter(data.url);
        } else if (domain.includes('vimeo.com')) {
          return this.embedService.getVimeo(data.url);
        } else if (domain.includes('www.instagram.com')) {
          return this.embedService.getInstagram(data.url);
        } else {
          return Object.assign({
            error: '지원하지않는 도메인 형식이거나 도메인이 정확하지않습니다.',
          });
        }
      }
    } catch (e) {
      return Object.assign({ error: '입력하신 URL 형식에 문제가 있습니다.' });
    }
  }
}
