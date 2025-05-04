import { Injectable } from '@angular/core';
import { Article } from '../model/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: Article[] = [
    new Article(
      1, 
      'Adjustable Dumbbell Set', 
      'Professional adjustable dumbbell set with weights ranging from 5 to 52.5 pounds. Perfect for home workouts with quick weight adjustment mechanism.', 
      299.99, 
      'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ),
    new Article(
      2, 
      'Olympic Barbell', 
      '20kg Olympic barbell with knurled grip zones. Made from high-quality steel with a weight capacity of 700 pounds.', 
      189.99, 
      'https://images.pexels.com/photos/4397840/pexels-photo-4397840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ),
    new Article(
      3, 
      'Squat Rack', 
      'Heavy-duty steel squat rack with adjustable safety bars and weight plate storage. Perfect for squats, bench press, and other compound exercises.', 
      449.99, 
      'https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ),
    new Article(
      4, 
      'Kettlebell Set', 
      'Cast iron kettlebell set with vinyl coating for floor protection. Includes 5kg, 10kg, and 15kg weights.', 
      129.99, 
      'https://images.pexels.com/photos/4162579/pexels-photo-4162579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ),
    new Article(
      5, 
      'Cable Crossover Machine', 
      'Commercial-grade cable crossover machine with dual weight stacks. Allows for a wide range of exercises targeting different muscle groups.', 
      1299.99, 
      'https://images.pexels.com/photos/2827400/pexels-photo-2827400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ),
    new Article(
      6, 
      'Weight Plate Set', 
      'Premium rubber-coated weight plate set with 2x5kg, 2x10kg, and 2x20kg plates. Compatible with Olympic bars.', 
      249.99, 
      'https://images.pexels.com/photos/4164766/pexels-photo-4164766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ),
    new Article(
      7,
      'Rowing Machine',
      'Commercial-grade rowing machine with magnetic resistance. Features LCD display showing time, distance, and calories burned.',
      899.99,
      'https://images.pexels.com/photos/4162438/pexels-photo-4162438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ),
    new Article(
      8,
      'Exercise Bike',
      'Professional spinning bike with adjustable resistance levels. Includes heart rate monitor and LCD display.',
      799.99,
      'https://images.pexels.com/photos/4162435/pexels-photo-4162435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ),
    new Article(
      9,
      'Treadmill',
      'High-end treadmill with incline settings and preset programs. Features shock absorption system and heart rate monitoring.',
      1499.99,
      'https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ),
    new Article(
      10,
      'Power Rack',
      'Commercial-grade power rack with pull-up bar and weight storage. Perfect for serious strength training.',
      799.99,
      'https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ),
    new Article(
      11,
      'Adjustable Bench',
      'Heavy-duty adjustable bench with multiple incline positions. Supports up to 1000 lbs capacity.',
      299.99,
      'https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ),
    new Article(
      12,
      'Adjustable Bench',
      'Heavy-duty adjustable bench with multiple incline positions. Supports up to 1000 lbs capacity.',
      299.99,
      'https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ),
    new Article(
      13,
      'Smith Machine',
      'Professional Smith machine with counter-balanced bar. Includes safety catches and precise linear bearings.',
      1999.99,
      'https://images.pexels.com/photos/4162459/pexels-photo-4162459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    )
  ];

  constructor() { }

  getArticles(page: number = 1, itemsPerPage: number = 6): Article[] {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return this.articles.slice(startIndex, endIndex);
  }

  getTotalPages(itemsPerPage: number = 6): number {
    return Math.ceil(this.articles.length / itemsPerPage);
  }

  getArticleById(id: number): Article | undefined {
    return this.articles.find(article => article.id === id);
  }
}