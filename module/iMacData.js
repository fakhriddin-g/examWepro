const data = [
  {
    title: 'MacBook Air',
    img: 'macbookair.png',
    price: 999,
    url: 'https://www.apple.com/shop/buy-mac/macbook-air',
    colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
    colorsImg: {
      '#C7C8CA': 'macbookpro.png',
      '#B1B2B7': 'macbook13.png',
      '#E3CCB4': 'macbookair.png'
    },
    specs: {
      display: {
        title: 'Retina display',
        size: 13.3
      },
      chip: {
        img: 'm1.png',
        title: 'Apple M1 chip',
        description: ''
      },
      ram: {
        img: 'memory.png',
        title: 'Up to 16GB unified memory',
        description: 'For increased performance and power efficiency'
      },
      memory: {
        size: 2,
        type: 'tb'
      },
      battery: 18,
      camera: {
        title: '720p FaceTime HD camera',
        description: 'With the image signal processor of M1 for drastically improved performance'
      },
      weight: 2.8,
      other: [
        'fingerprint.png'
      ]
    }
  },
  {
    title: 'MacBook Pro 13”',
    img: 'macbook13.png',
    price: 1299,
    url: 'https://www.apple.com/shop/buy-mac/macbook-pro/13-inch',
    colors: ['#C7C8CA', '#B1B2B7'],
    colorsImg: {
      '#C7C8CA': 'macbookpro.png',
      '#B1B2B7': 'macbook13.png',
      '#E3CCB4': 'macbookair.png'
    },
    specs: {
      display: {
        title: 'Retina display',
        size: 13.3
      },
      chip: {
        img: 'm1.png',
        title: 'Apple M1 chip',
        description: 'Also available with Intel Core i5 or i7 processor'
      },
      ram: {
        img: 'memory.png',
        title: 'Up to 16GB unified memory',
        description: 'For increased performance and power efficiency'
      },
      memory: {
        size: 2,
        type: 'tb'
      },
      battery: 20,
      camera: {
        title: '720p FaceTime HD camera',
        description: 'With the image signal processor of M1 for drastically improved performance'
      },
      weight: 3.0,
      other: [
        'touch.png',
        'sound.png',
        'fingerprint.png'
      ]
    }
  },
  {
    title: 'MacBook Pro 16”',
    img: 'macbookpro.png',
    price: 2399,
    url: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch',
    colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
    colorsImg: {
      '#C7C8CA': 'macbookpro.png',
      '#B1B2B7': 'macbook13.png',
      '#E3CCB4': 'macbookair.png'
    },
    specs: {
      display: {
        title: 'Retina display',
        size: 16
      },
      chip: {
        img: 'intel.png',
        title: 'Up to Intel Core i9 processor',
        description: ''
      },
      ram: {
        img: 'memory2.png',
        title: 'Up to 64GB memory',
        description: ''
      },
      memory: {
        size: 8,
        type: 'tb'
      },
      battery: 11,
      camera: {
        title: '720p FaceTime HD camera',
        description: ''
      },
      weight: 4.3,
      other: [
        'touch.png',
        'sound.png',
        'fingerprint.png'
      ]
    }
  },
]

export default data