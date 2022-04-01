//SKIN TYPE SVG
import Normal from '../../assets/svg/skin_profiling/skin_type/normal.svg';
import Dry from '../../assets/svg/skin_profiling/skin_type/dry.svg';
import Oily from '../../assets/svg/skin_profiling/skin_type/oily.svg';
import Combination from '../../assets/svg/skin_profiling/skin_type/combination.svg';
import Sensitive from '../../assets/svg/skin_profiling/skin_type/sensitive.svg';

//SKIN TONE SVG
import Fair from '../../assets/svg/skin_profiling/skin_tone/fair.svg';
import Light from '../../assets/svg/skin_profiling/skin_tone/light.svg';
import Medium from '../../assets/svg/skin_profiling/skin_tone/medium.svg';
import Dark from '../../assets/svg/skin_profiling/skin_tone/dark.svg';

//SKIN UNDER TONE SVG
import Cool from '../../assets/svg/skin_profiling/skin_under_tone/cool.svg';
import Warm from '../../assets/svg/skin_profiling/skin_under_tone/warm.svg';
import Neutral from '../../assets/svg/skin_profiling/skin_under_tone/neutral.svg';

//CATEGOY CARD LIST
import Lips from '../../assets/svg/categories/lips.svg';
import Eyes from '../../assets/svg/categories/eye.svg';
import Skin from '../../assets/svg/categories/skin.svg';
import Face from '../../assets/svg/categories/face.svg';

//POPULARPORUCT
import Product1 from '../../assets/svg/products/product_1.svg';
import Product2 from '../../assets/svg/products/product_2.svg';
import Product3 from '../../assets/svg/products/product_3.svg';
import Product4 from '../../assets/svg/products/product_4.svg';
import Product5 from '../../assets/svg/products/product_5.svg';
import HeartnotLiked from '../../assets/svg/products/heart_notlike.svg';

//top10product
import Top1 from '../../assets/svg/products/top10products/top_1.svg';
import Top2 from '../../assets/svg/products/top10products/top_2.svg';
import Top3 from '../../assets/svg/products/top10products/top_3.svg';
import Top4 from '../../assets/svg/products/top10products/top_4.svg';
import Top5 from '../../assets/svg/products/top10products/top_5.svg';
import Top6 from '../../assets/svg/products/top10products/top_6.svg';
import Top7 from '../../assets/svg/products/top10products/top_7.svg';
import Top8 from '../../assets/svg/products/top10products/top_8.svg';
import Top9 from '../../assets/svg/products/top10products/top_9.svg';
import Top10 from '../../assets/svg/products/top10products/top_10.svg';

//small discount Banner
import SmallDispcountBanner from '../../assets/svg/promo/small_discount_banner.svg';

export const SKIN_TYPE_DATA = [
  {
    skin_type_svg: Normal,
    text: 'Normal',
  },
  {
    skin_type_svg: Dry,
    text: 'Dry',
  },
  {
    skin_type_svg: Oily,
    text: 'Oily',
  },
  {
    skin_type_svg: Combination,
    text: 'Combination',
  },
  {
    skin_type_svg: Sensitive,
    text: 'Sensitive',
  },
];

export const SKIN_TONE_DATA = [
  {
    skin_tone_svg: Fair,
    text: 'Fair',
  },
  {
    skin_tone_svg: Light,
    text: 'Light',
  },
  {
    skin_tone_svg: Medium,
    text: 'Medium',
  },
  {
    skin_tone_svg: Dark,
    text: 'Dark',
  },
];
export const SKIN_UNDER_TONE_DATA = [
  {
    skin_under_tone_svg: Cool,
    text: 'Cool',
  },
  {
    skin_under_tone_svg: Warm,
    text: 'Warm',
  },
  {
    skin_under_tone_svg: Neutral,
    text: 'Neutral',
  },
];

export const CATEGORY_ROUND_DATA = [
  {id: 0, svg: Face, name: 'Face'},
  {id: 1, svg: Eyes, name: 'Eyes'},
  {id: 2, svg: Lips, name: 'Lips'},
  {id: 3, svg: Skin, name: 'Skin'},
];

export const POPULAR_PRODUCT_DEMO_DATA = [
  {
    icon: Product5,
    top_product_icon: Top1,
    name: 'NIVEA',
    description: 'Shooting Cleansing Oil',
    star: 4.8,
    price: '120.000',
    small_discount_banner: SmallDispcountBanner,
    discount_amount_percentage: '50',
    discount_amount_in_price: '10.000',
    heart_like: HeartnotLiked,
  },
  {
    icon: Product4,
    top_product_icon: Top2,
    name: 'RATED GREEN',
    description: 'Shooting Cleansing Oil',
    star: 4.8,
    price: '140.000',
    small_discount_banner: SmallDispcountBanner,
    discount_amount_percentage: '50',
    discount_amount_in_price: '10.000',
    heart_like: HeartnotLiked,
  },
  {
    icon: Product3,
    top_product_icon: Top3,
    name: 'NIVEA',
    description: 'Shooting Cleansing Oil',
    star: 4,
    price: '150.000',
    small_discount_banner: SmallDispcountBanner,
    discount_amount_percentage: '50',
    discount_amount_in_price: '10.000',
    heart_like: HeartnotLiked,
  },
  {
    icon: Product2,
    top_product_icon: Top4,
    name: 'RATED GREEN',
    description: 'Shooting Cleansing Oil',
    star: 4.8,
    price: '130.000',
    small_discount_banner: SmallDispcountBanner,
    discount_amount_percentage: '50',
    discount_amount_in_price: '10.000',
    heart_like: HeartnotLiked,
  },
  {
    icon: Product1,
    top_product_icon: Top5,
    name: 'NIVEA',
    description: 'Shooting Cleansing Oil',
    star: 4.8,
    price: '170.000',
    small_discount_banner: SmallDispcountBanner,
    discount_amount_percentage: '50',
    discount_amount_in_price: '10.000',
    heart_like: HeartnotLiked,
  },
  {
    icon: Product5,
    top_product_icon: Top6,
    name: 'RATED GREEN',
    description: 'Shooting Cleansing Oil',
    star: 4.8,
    price: '140.000',
    small_discount_banner: SmallDispcountBanner,
    discount_amount_percentage: '50',
    discount_amount_in_price: '10.000',
    heart_like: HeartnotLiked,
  },
  {
    icon: Product5,
    top_product_icon: Top7,
    name: 'RATED GREEN',
    description: 'Shooting Cleansing Oil',
    star: 4.8,
    price: '140.000',
    small_discount_banner: SmallDispcountBanner,
    discount_amount_percentage: '50',
    discount_amount_in_price: '10.000',
    heart_like: HeartnotLiked,
  },
  {
    icon: Product5,
    top_product_icon: Top8,
    name: 'RATED GREEN',
    description: 'Shooting Cleansing Oil',
    star: 4.8,
    price: '140.000',
    small_discount_banner: SmallDispcountBanner,
    discount_amount_percentage: '50',
    discount_amount_in_price: '10.000',
    heart_like: HeartnotLiked,
  },
  {
    icon: Product5,
    top_product_icon: Top9,
    name: 'RATED GREEN',
    description: 'Shooting Cleansing Oil',
    star: 4.8,
    price: '140.000',
    small_discount_banner: SmallDispcountBanner,
    discount_amount_percentage: '50',
    discount_amount_in_price: '10.000',
    heart_like: HeartnotLiked,
  },
  {
    icon: Product3,
    top_product_icon: Top10,
    name: 'NIVEA',
    description: 'Shooting Cleansing Oil',
    star: 4,
    price: '150.000',
    small_discount_banner: SmallDispcountBanner,
    discount_amount_percentage: '50',
    discount_amount_in_price: '10.000',
    heart_like: HeartnotLiked,
  },
];
