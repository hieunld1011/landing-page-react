import './styles.scss';

import Container from '../../common/Container';
import Button from '../../common/Button';

import {
  heroBusiness,
  heroImage,
  facebook,
  twitch,
  google,
  youtube,
  pinterest,
  customer1,
  customer2,
} from '../../../assets/home';

const Home: React.FC = () => {
  const trustedByIcons = [
    {
      src: google as any,
      alt: 'Google' as string,
    },
    {
      src: facebook as any,
      alt: 'Facebook' as string,
    },
    {
      src: youtube as any,
      alt: 'Youtube' as string,
    },
    {
      src: twitch as any,
      alt: 'Twitch' as string,
    },
    {
      src: pinterest as any,
      alt: 'Pinterest' as string,
    },
  ];

  return (
    <Container padding='pt-12'>
      <section id='home'>
        <div className='center'>
          <Button classBtn='section_btn' padding={'px-4 py-2'}>
            Finance app
          </Button>
        </div>

        <div className='px-8'>
          <h1 className='section_title mt-11'>
            The most transparent &
            <br />
            secure banking ever
          </h1>
          <p className='section_subtitle mt-8'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut luctus aliquet ut nisl
            <br />
            tortor nam lacus sit in lorem elementum scelerisque ma.
          </p>
        </div>

        <div className='center mt-8'>
          <Button classBtn='home_btn-1' padding={'px-5 py-3'}>
            Get started
          </Button>
          <Button classBtn='home_btn-2' padding={'px-5 py-3'} margin={'ml-6'}>
            Learn more
          </Button>
        </div>

        <div className='home_hero mt-24'>
          <picture>
            <img src={heroImage} alt='home hero' />
          </picture>
          <img className='home_business_image' src={heroBusiness} alt='business values' />
          <img className='home_business_cusomer1' src={customer1} alt='customer 1' />
          <img className='home_business_cusomer2' src={customer2} alt='customer 1' />
        </div>

        <div className='home_footer mt-24'>
          <h4>Trusted by</h4>
          <ul>
            {trustedByIcons.map((icon) => (
              <img key={icon.alt} src={icon.src} alt={icon.alt} />
            ))}
          </ul>
        </div>
      </section>
    </Container>
  );
};

export default Home;
