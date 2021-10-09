// масив з товарамы 225 строуа
const Product = [
  // Мужчинам
    {
      id: 0000001,
      rating: 25,
      img: 'img/male/Puma(1px)380-380.jpg',
      img2x: 'img/male/Puma(2px)760-760.jpg 2x',
      discount: -50,
      brand: 'Test',
      category: 'Мужские Кроссовки',
      season: 'Spring-Summer',
      categoryId: 'male',
      price: 1000
    },
    {
      id: 0000001,
      rating: 25,
      img: 'img/male/Puma(1px)380-380.jpg',
      img2x: 'img/male/Puma(2px)760-760.jpg 2x',
      discount: -50,
      brand: 'Puma',
      category: 'Мужские Кроссовки',
      season: 'Spring-Summer',
      categoryId: 'male',
      price: 1000
    },
    {
      id: 0000002,
      rating: 251,
      img: 'img/male/Helly-hansen(1px)380-380.jpg',
      img2x: 'img/male/Helly-hansen(2px)760-760.jpg 2x',
      discount: '',
      brand: 'Helly hansen',
      category: 'Мужские Кроссовки',
      season: 'Summer',
      categoryId: 'male',
      price: 2000
    },
    {
      id: 0000002,
      rating: 254,
      img: 'img/male/Puma-2(1px)380-380.jpg',
      img2x: 'img/male/Puma-2(2px)760-760.jpg 2x',
      discount: -80,
      brand: 'Puma',
      category: 'Мужские Кроссовки',
      season: 'Winter',
      categoryId: 'male',
      price: 3000
    },
    {
      id: 0000001,
      rating: 250,
      img: 'img/male/Nike(1px)380-380.jpg',
      img2x: 'img/male/Nike(2px)760-760.jpg 2x',
      discount: '',
      brand: 'Nike',
      category: 'Мужские Кроссовки',
      season: 'Summer',
      categoryId: 'male',
      price: 4000,
    },
    {
      id: 0000002,
      rating: 251,
      img: 'img/male/Champion(1px)380-380.jpg',
      img2x: 'img/male/Champion(2px)760-760.jpg 2x',
      discount: '',
      brand: 'Champion',
      category: 'Мужские Кроссовки',
      season: 'Spring-Summer',
      categoryId: 'male',
      price: 5000
    },
    {
      id: 0000002,
      rating: 253,
      img: 'img/male/Champion-2(1px)380-380.jpg',
      img2x: 'img/male/Champion-2(2px)760-760.jpg 2x',
      discount: -70,
      brand: 'Champion',
      category: 'Мужские Кроссовки',
      season: 'Summer',
      categoryId: 'male',
      price: 6000
    },
    // Мужчинам
    // Женщинам
    {
      id: 0000001,
      rating: 25,
      img: 'img/women/Nike-1(1px)380-380.jpg',
      img2x: 'img/women/Nike-1(2px)760-760.jpg 2x',
      discount: -50,
      brand: 'Nike',
      category: 'Женские Кроссовки',
      season: 'Autumn-Winter',
      categoryId: 'women',
      price: 1000
    },
    {
      id: 0000002,
      rating: 251,
      img: 'img/women/Nike-2(1px)380-380.jpg',
      img2x: 'img/women/Nike-2(2px)760-760.jpg 2x',
      discount: '',
      brand: 'Nike',
      category: 'Женские Кроссовки',
      season: 'Summer',
      categoryId: 'women',
      price: 2000
    },
    {
      id: 0000002,
      rating: 254,
      img: 'img/women/New_Balance-1(1px)380-380.jpg',
      img2x: 'img/women/New_Balance-1(2px)760-760.jpg 2x',
      discount: -10,
      brand: 'New Balance',
      category: 'Женские Кроссовки',
      season: 'Spring-Summer',
      categoryId: 'women',
      price: 3000
    },
    {
      id: 0000001,
      rating: 250,
      img: 'img/women/New_Balance-2(1px)380-380.jpg',
      img2x: 'img/women/New_Balance-2(2px)760-760.jpg 2x',
      discount: -50,
      brand: 'New Balance',
      category: 'Женские Кроссовки',
      season: 'Summer',
      categoryId: 'women',
      price: 4000,
    },
    {
      id: 0000002,
      rating: 251,
      img: 'img/women/Puma-1(1px)380-380.jpg',
      img2x: 'img/women/Puma-1(2px)760-760.jpg 2x',
      discount: '',
      brand: 'Puma',
      category: 'Женские Кроссовки',
      season: 'Autumn-Winter',
      categoryId: 'women',
      price: 5000
    },
    {
      id: 0000002,
      rating: 253,
      img: 'img/women/Puma-2(1px)380-380.jpg',
      img2x: 'img/women/Puma-2(2px)760-760.jpg 2x',
      discount: -70,
      brand: 'Puma',
      category: 'Женские Кроссовки',
      season: 'Summer',
      categoryId: 'women',
      price: 6000
    },
    //// Женщинам
    // Детям
    {
      id: 0000001,
      rating: 25,
      img: 'img/children/Nike-1(1px)380-380.jpg',
      img2x: 'img/children/Nike-1(2px)760-760.jpg 2x',
      discount: -50,
      brand: 'Nike',
      category: 'Детские Кроссовки',
      season: 'Spring-Summer',
      categoryId: 'children',
      price: 1000
    },
    {
      id: 0000002,
      rating: 251,
      img: 'img/children/Nike-2(1px)380-380.jpg',
      img2x: 'img/children/Nike-2(2px)760-760.jpg 2x',
      discount: '',
      brand: 'Nike',
      category: 'Детские Кроссовки',
      season: 'Summer',
      categoryId: 'children',
      price: 2000
    },
    {
      id: 0000002,
      rating: 254,
      img: 'img/children/Champion-1(1px)380-380.jpg',
      img2x: 'img/children/Champion-1(2px)760-760.jpg 2x',
      discount: -80,
      brand: 'Champion',
      category: 'Детские Кроссовки',
      season: 'Winter',
      categoryId: 'children',
      price: 3000
    },
    {
      id: 0000001,
      rating: 250,
      img: 'img/children/Champion-2(1px)380-380.jpg',
      img2x: 'img/children/Champion-2(2px)760-760.jpg 2x',
      discount: '',
      brand: 'Champion',
      category: 'Детские Кроссовки',
      season: 'Summer',
      categoryId: 'children',
      price: 4000,
    },
    {
      id: 0000002,
      rating: 251,
      img: 'img/children/Puma-1(1px)380-380.jpg',
      img2x: 'img/children/Puma-1(2px)760-760.jpg 2x',
      discount: '',
      brand: 'Puma',
      category: 'Детские Кроссовки',
      season: 'Autumn-Winter',
      categoryId: 'children',
      price: 5000
    },
    {
      id: 0000002,
      rating: 253,
      img: 'img/children/Puma-2(1px)380-380.jpg',
      img2x: 'img/children/Puma-2(2px)760-760.jpg 2x',
      discount: -70,
      brand: 'Puma',
      category: 'Детские Кроссовки',
      season: 'Summer',
      categoryId: 'children',
      price: 6000
    },
    //// Детям
    // ===============================

];



