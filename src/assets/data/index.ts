export const data = {
  name: "BNE CORPORATION",
  contact: {
    tel: "88003336653",
  },
  copyRight: {
    text: "2023 © BNE CORPORATION",
    links: [
      {
        name: "Политика конфиденциальности",
        href: "#",
      },
      {
        name: "Персональные данные",
        href: "#",
      },
      {
        name: "Оферта",
        href: "#",
      },
    ],
  },
  workingHours: {
    "пн-сб": "10:00 - 19:00",
    "вс": "10:00 - 17:00",
  },
  menu: [
    { name: "Каталог", url: "/catalog" },
    { name: "Акции", url: "/promotions" },
    { name: "Сервис", url: "/services" },
    { name: "Контакты", url: "/contacts" },
  ],
  brands: [
    {
      id: 1,
      name: 'BNE CORPORАТIОN',
    }
  ],
  types: [
    { id: 1, name: 'Съемники для сцепления', slug: 'clutch-pullers' },
    { id: 2, name: 'Ключи для вилки', slug: 'shock-absorber-keys' },
    { id: 3, name: 'Ключ для регулировки армотизатора', slug: 'shock-absorber-adjustment-keys' },
    { id: 4, name: 'Ключи для натяжки цепи', slug: 'chain-tensioning-keys' },
    { id: 5, name: 'Подставка-треугольник, крос, крос-эндуро', slug: 'triangular-stands' },
    { id: 6, name: 'Мотоподъемники', slug: 'motorcycle-lifts' }
  ],
  categories: [
    {
      id: 1, name: 'Инструмент', slug: 'instruments', types: [
        1, 2, 3, 4
      ]
    },
    {
      id: 2, name: 'Оборудование для обслуживания', slug: 'service', types: [
        5, 6
      ]
    }
  ],
  products: [
    {
      product_id: 1,
      category_id: 1,
      type_id: 1,
      brands_id: [1],
      article_number: 'ВN00007',
      title: 'Съемник корзины сцепления Yamaha MT',
      price: 1780,
      images: ['/image/products/spanners/IMG_6784.png',]
    },
    {
      product_id: 2,
      category_id: 1,
      type_id: 1,
      brands_id: [1],
      article_number: 'ВN00008',
      title: 'Съемник корзины сцепления Yamaha TTR',
      price: 1780,
      images: ['/image/products/spanners/IMG_6784.png',]
    },
    {
      product_id: 3,
      category_id: 1,
      type_id: 1,
      brands_id: [1],
      article_number: 'ВN00003',
      title: 'Съемник корзины сцепления KTM',
      price: 1780,
      images: ['/image/products/spanners/IMG_6784.png',]
    },
    {
      product_id: 4,
      category_id: 1,
      type_id: 1,
      brands_id: [1],
      article_number: 'ВN00002',
      title: 'Съемник корзины сцеплени Kawasaki Suzuki Honda',
      price: 1750,
      images: ['/image/products/spanners/IMG_6784.png',]
    },
    {
      product_id: 5,
      category_id: 1,
      type_id: 1,
      brands_id: [1],
      article_number: 'ВN00011',
      title: 'Съемник корзины сцепления Honda CR, CRF',
      price: 1830,
      images: ['/image/products/spanners/IMG_6784.png',]
    },
    {
      product_id: 6,
      category_id: 1,
      type_id: 1,
      brands_id: [1],
      article_number: 'ВN00001',
      title: 'Съемник корзины сцепления Kawasaki / Suzuki',
      price: 1750,
      images: ['/image/products/spanners/IMG_6784.png',]
    }
  ]
};
