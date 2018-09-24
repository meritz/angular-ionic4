import { Component } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {
  data: any;
  page: 0;
  

  constructor(private newsService: NewsService, private router: Router) {
   }

  ngOnInit() {
    this.newsService.getData(`everything?sources=ign`)
    .subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }

  onGoToSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

  // loadMoreNews(event) {
  //   this.page++;
  //   console.log(event);
  //   this.newsService.getData(`top-headlines?sources=ign`)
  //   .subscribe(data => {
  //     // console.log(data);
  //     // this.data = data;
  //     for (const article of data['articles']) {
  //       this.data.articles.push(article);
  //     }
  //     event.target.complete();
  //     console.log(this.data);
  //   });
  // }
}
