// News model

class News {
  constructor(id, title, date, author, agency, description, imageUrl, category) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.author = author;
    this.agency = agency;
    this.description = description;
    this.imageUrl = imageUrl;
    this.category = category;
  }
}

export default News;