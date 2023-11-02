import Container from '../../common/Container';
import Button from '../../common/Button';

import { security, support, mobile, payments, report, crypto } from '../../../assets/features';

const Features: React.FC = () => {
  const featureFields = [
    {
      icon: mobile as any,
      alt: 'mobile icon' as string,
      title: 'Mobile app' as string,
      desc: `Suspendisse in amet volutpat et cras sit velit magna risus posuere volutpat laoreet
            dictum lectus tellus massa nec vel proin` as string,
    },
    {
      icon: crypto as any,
      alt: 'crypto icon' as string,
      title: 'Crypto supported' as string,
      desc: `Blandit iaculis egestas sapien rhoncus congue dui placerat facilisi egestas convallis
      duis nunc leo tristique purus ut et enim` as string,
    },
    {
      icon: security as any,
      alt: 'security icon' as string,
      title: '256-bit security' as string,
      desc: `Vitae venenatis sapien in mi tristique ut vulputate elit sit fermentum arcu egestas
      quam amet amet libero turpis nibh` as string,
    },
    {
      icon: support as any,
      alt: 'support icon' as string,
      title: 'World-className support' as string,
      desc: `Suspendisse in amet volutpat et cras sit velit magna risus posuere volutpat laoreet
              dictum lectus tellus massa nec vel proin` as string,
    },
    {
      icon: report as any,
      alt: 'report icon' as string,
      title: 'Expense reports' as string,
      desc: `Blandit iaculis egestas sapien rhoncus congue dui placerat facilisi egestas convallis
      duis nunc leo tristique purus ut et enim` as string,
    },
    {
      icon: payments as any,
      alt: 'payments icon' as string,
      title: 'Automatic payments' as string,
      desc: `Vitae venenatis sapien in mi tristique ut vulputate elit sit fermentum arcu egestas
      quam amet amet libero turpis nibh` as string,
    },
  ];

  return (
    <Container padding='pt-20'>
      <section id='features'>
        <div className='center'>
          <Button classBtn='section_btn' padding={'px-4 py-2'}>
            Features
          </Button>
        </div>

        <div className='px-8'>
          <h1 className='section_title mt-11'>
            The features that make
            <br />
            our bank unique
          </h1>
          <p className='section_subtitle mt-8'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut luctus aliquet ut nisl
            <br />
            tortor nam lacus sit in lorem elementum scelerisque ma.
          </p>
        </div>

        <div className='features_main mt-36'>
          {featureFields.map((feature) => (
            <article key={feature.title}>
              <img src={feature.icon} alt={feature.alt} />
              <h5>{feature.title}</h5>
              <p>{feature.desc}</p>
            </article>
          ))}
        </div>

        <div className='center mt-28 mb-10'>
          <Button classBtn='home_btn-1' padding={'px-5 py-3'}>
            Get started
          </Button>
          <Button classBtn='home_btn-2' padding={'px-5 py-3'} margin={'ml-6'}>
            Browser all features
          </Button>
        </div>
      </section>
    </Container>
  );
};

export default Features;
