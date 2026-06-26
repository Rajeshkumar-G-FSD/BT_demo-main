import { Property } from './types';
import imgOotyHotel from './assets/images/browntree_ooty_hotel.png';
import imgOotyHotels from './assets/images/browntree_ooty_hotels.png';
import imgKothagiri from './assets/images/browntree_kothagiri.png';
import imgKodaikanal from './assets/images/browntree_kodaikanal.png';

export const PROPERTIES: Property[] = [
  {
    id: 'lunar-oasis',
    name: 'Browntree Ooty Resort',
    location: 'OOTY',
    address: '1874 Forest Haven Rd, Asheville',
    price: 300000,
    rentPrice: 2400,
    type: 'Hotel',
    size: 695,
    yard: 126,
    bedrooms: 3,
    baths: 2,
    mainImage: imgOotyHotel,
    gallery: [
      { name: 'Browntree Ooty Suite', url: imgOotyHotel },
      { name: 'Browntree Ooty Grounds', url: imgOotyHotels },
      { name: 'Browntree Kothagiri Crest', url: imgKothagiri },
      { name: 'Browntree Kodaikanal Retreat', url: imgKodaikanal }
    ],
    description: 'This futuristic villa seamlessly blends into the desert environment, offering a modern, flowing space with panoramic desert views. Its innovative design makes it a perfect luxury getaway.',
    rating: 4.9
  },
  {
    id: 'solaria-dome',
    name: 'Browntree Coonoor Homestay',
    location: 'COONOOR',
    address: '12 Tea Garden Lane, Coonoor',
    price: 520000,
    rentPrice: 3800,
    type: 'HomeStays',
    size: 540,
    yard: 80,
    bedrooms: 2,
    baths: 2,
    mainImage: imgOotyHotels,
    gallery: [
      { name: 'Garden View', url: imgOotyHotels },
      { name: 'Ooty Resort', url: imgOotyHotel },
      { name: 'Kothagiri Wing', url: imgKothagiri }
    ],
    description: 'A charming homestay nestled amidst Coonoor\'s rolling tea gardens. Enjoy the cool misty mornings, colonial-era architecture and warm hospitality of the Nilgiris.',
    rating: 4.85
  },
  {
    id: 'nebula-glass',
    name: 'Browntree Kothakiri Heritage',
    location: 'KOTHAKIRI',
    address: '88 Nilgiri Crest, Kothakiri',
    price: 850000,
    rentPrice: 5900,
    type: 'Heritage Stays',
    size: 820,
    yard: 150,
    bedrooms: 4,
    baths: 4,
    mainImage: imgKothagiri,
    gallery: [
      { name: 'Heritage Bungalow', url: imgKothagiri },
      { name: 'Kodaikanal View', url: imgKodaikanal },
      { name: 'Ooty Resort', url: imgOotyHotel }
    ],
    description: 'A beautifully restored heritage bungalow in the serene village of Kothakiri. Experience colonial charm, lush shola forests and breathtaking Nilgiri panoramas.',
    rating: 4.98
  },
  {
    id: 'canyon-echo',
    name: 'Browntree Kodaikanal Retreat',
    location: 'KODAIKANAL',
    address: '712 Lake Road, Kodaikanal',
    price: 430000,
    rentPrice: 3100,
    type: 'Service Apartments',
    size: 610,
    yard: 200,
    bedrooms: 3,
    baths: 3,
    mainImage: imgKodaikanal,
    gallery: [
      { name: 'Kodaikanal Estate', url: imgKodaikanal },
      { name: 'Kothagiri Stay', url: imgKothagiri },
      { name: 'Ooty Grounds', url: imgOotyHotels }
    ],
    description: 'Perched above the silver cascade valleys of Kodaikanal, this fully-serviced apartment blends modern comfort with the timeless beauty of the Princess of Hill Stations.',
    rating: 4.78
  }
];
