import { Injectable } from '@nestjs/common';
import { Youtube, Twitter, Vimeo } from './entities/embed.entity';
import request = require('request');

@Injectable()
export class EmbedService {
  private youtube: Youtube;
  private twitter: Twitter;
  private vimeo: Vimeo;
  private instagram;

  async getYouTube(url: string) {
    try {
      const promise = await new Promise<Youtube>((resolve, reject) => {
        request.get(
          {
            headers: { 'content-type': 'application/json' },
            url: `https://www.youtube.com/oembed?url=${url}&format=json`,
            json: true,
          },
          (err, res, body) => {
            if (err) {
              reject(err);
            }
            if (body === 'Bad Request' || body === 'Not Found') {
              reject(body);
            }
            resolve(body);
          },
        );
      });
      this.youtube = promise;
      return this.youtube;
    } catch (e) {
      return Object.assign({ error: `Youtube Error : ${e}` });
    }
  }

  async getTwitter(url: string) {
    try {
      const promise = await new Promise<Twitter>((resolve, reject) => {
        request.get(
          {
            headers: { 'content-type': 'application/json' },
            url: `https://publish.twitter.com/oembed?url=${url}`,
            json: true,
          },
          (err, res, body) => {
            if (err) {
              reject(err);
            }
            if (body.errors) {
              reject(body.errors[0].message);
            } else if (body.message) {
              reject(body.message);
            } else {
              resolve(body);
            }
          },
        );
      });
      this.twitter = promise;
      return this.twitter;
    } catch (e) {
      return Object.assign({ error: `Twitter Error : ${e}` });
    }
  }

  async getVimeo(url: string) {
    try {
      const promise = await new Promise<Vimeo>((resolve, reject) => {
        request.get(
          {
            headers: { 'content-type': 'application/json' },
            url: `https://vimeo.com/api/oembed.json?url=${url}`,
            json: true,
          },
          (err, res, body) => {
            if (err) {
              reject(err);
            }
            if (body === '404 Not Found') {
              reject(body);
            }
            resolve(body);
          },
        );
      });
      this.vimeo = promise;
      return this.vimeo;
    } catch (e) {
      return Object.assign({ error: `Vimeo Error : ${e}` });
    }
  }
  async getInstagram(url: string) {
    try {
      const promise = await new Promise<Vimeo>((resolve, reject) => {
        console.log(
          `https://graph.facebook.com/v14.0/instagram_oembed?url=${url}&access_token=${process.env.APP_ID}|${process.env.FACEBOOK_TOKEN}`,
        );
        request.get(
          {
            headers: { 'content-type': 'application/json' },
            url: `https://graph.facebook.com/v14.0/instagram_oembed?url=${url}&access_token=${process.env.APP_ID}|${process.env.FACEBOOK_TOKEN}`,
            json: true,
          },
          (err, res, body) => {
            console.log(body);
            if (err) {
              reject(err);
            }
            resolve(body);
          },
        );
      });
      this.vimeo = promise;
      return this.vimeo;
    } catch (e) {
      return Object.assign({ error: `Instagram Error : ${e}` });
    }
  }
}
