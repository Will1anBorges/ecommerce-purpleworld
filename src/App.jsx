import { useEffect, useState, useRef } from 'react';
import { Best, ButtonCart, ButtonConheca, ButtonMenu, ButtonSearch, ButtonUser, Container, Flex, Footer, Header, Item, SearchBar, EmailBar, ButtonSocial, ButtonCheck, ButtonAddFavorite, ButtonShare, ButtonAddCart, ButtonDirec, Pulse } from './styles/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faEnvelope, faSearch, faUser, faCheck, faCartPlus, faShare, faHeart, faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faWhatsapp, faTiktok } from '@fortawesome/free-brands-svg-icons';
import LogoImg from './public/logo.svg';
import BackImg from './public/background.jpg';
import BannerImg1 from './public/banner1.svg';
import BannerImg2 from './public/banner2.svg';
import BannerImg3 from './public/banner3.svg';
import BannerImg4 from './public/banner4.svg';

function App() {

  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('http://localhost:5173/mock/products.json')
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= 270;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += 270;
  };

  // if (!data || !data.length) return null;

  return (
    <Container>
      <Header>
        <Flex direction="row">
          <ButtonMenu><FontAwesomeIcon icon={faBars} /></ButtonMenu>
          <img className='logo' src={LogoImg} alt="Logo Image" />
          <SearchBar
            type="text"
            placeholder='Digite aqui oque procura!'
          />
          <ButtonSearch><FontAwesomeIcon className='icon' icon={faSearch} /></ButtonSearch>
          <ButtonUser><FontAwesomeIcon icon={faUser} /></ButtonUser>
          <ButtonCart><FontAwesomeIcon icon={faCartShopping} /></ButtonCart>
        </Flex>
      </Header>

      <Flex>
        <Flex className='carousel-banner' direction="row" justify="none">
          <img className='bannerImg1' src={BannerImg1} alt="Banner Image" />
          <img className='bannerImg2' src={BannerImg2} alt="Banner Image" />
          <img className='bannerImg3' src={BannerImg3} alt="Banner Image" />
          <img className='bannerImg4' src={BannerImg4} alt="Banner Image" />
        </Flex>
        <img className='backImg' src={BackImg} alt="Background Image" />
        <Flex>
          <h1 className='welcome'>Seja bem vindo!</h1>
          <h3>aqui você encontrará a maior variedade em artigos de papelaria, contando <br />
            com uma vasta lista desde materiais escolares até livros didáticos e de fantasia! <br />
            A PurpleWorld The Stationery Shop agradece a sua visita, e para isso disponibilizamos <br />
            um link direto para nossos principais produtos para você se familiarizar com a nossa loja!</h3>
        </Flex>
        <ButtonConheca className='btn-conheca'>Conheça nossas ofertas!</ButtonConheca>
      </Flex>

      <Best>Best Sellers</Best>

      <Flex className="container-carousel">
        <Flex className="carousel" direction="row" justify="none" ref={carousel}>
          <Item>
            <img src={data['products'] ? data['products']['0']['image'] : ''} alt="" />
            <span>{data['products'] ? data['products']['0']['name'] : ''}</span>
            <span className='price'>R$ {data['products'] ? data['products']['0']['price'] : ''}</span>
            <Flex direction="row" gap="9px">
              <ButtonAddFavorite><FontAwesomeIcon icon={faHeart} /></ButtonAddFavorite>
              <ButtonShare><FontAwesomeIcon icon={faShare} /></ButtonShare>
              <ButtonAddCart><FontAwesomeIcon icon={faCartPlus} /></ButtonAddCart>
            </Flex>
          </Item>
          <Item>
            <img src={data['products'] ? data['products']['1']['image'] : ''} alt="" />
            <span>{data['products'] ? data['products']['1']['name'] : ''}</span>
            <span className='price'>R$ {data['products'] ? data['products']['1']['price'] : ''}</span>
            <Flex direction="row" gap="9px">
              <ButtonAddFavorite><FontAwesomeIcon icon={faHeart} /></ButtonAddFavorite>
              <ButtonShare><FontAwesomeIcon icon={faShare} /></ButtonShare>
              <ButtonAddCart><FontAwesomeIcon icon={faCartPlus} /></ButtonAddCart>
            </Flex>
          </Item>
          <Item>
            <img src={data['products'] ? data['products']['2']['image'] : ''} alt="" />
            <span>{data['products'] ? data['products']['2']['name'] : ''}</span>
            <span className='price'>R$ {data['products'] ? data['products']['2']['price'] : ''}</span>
            <Flex direction="row" gap="9px">
              <ButtonAddFavorite><FontAwesomeIcon icon={faHeart} /></ButtonAddFavorite>
              <ButtonShare><FontAwesomeIcon icon={faShare} /></ButtonShare>
              <ButtonAddCart><FontAwesomeIcon icon={faCartPlus} /></ButtonAddCart>
            </Flex>
          </Item>
          <Item>
            <img src={data['products'] ? data['products']['3']['image'] : ''} alt="" />
            <span>{data['products'] ? data['products']['3']['name'] : ''}</span>
            <span className='price'>R$ {data['products'] ? data['products']['3']['price'] : ''}</span>
            <Flex direction="row" gap="9px">
              <ButtonAddFavorite><FontAwesomeIcon icon={faHeart} /></ButtonAddFavorite>
              <ButtonShare><FontAwesomeIcon icon={faShare} /></ButtonShare>
              <ButtonAddCart><FontAwesomeIcon icon={faCartPlus} /></ButtonAddCart>
            </Flex>
          </Item>
          <Item>
            <img src={data['products'] ? data['products']['4']['image'] : ''} alt="" />
            <span>{data['products'] ? data['products']['4']['name'] : ''}</span>
            <span className='price'>R$ {data['products'] ? data['products']['4']['price'] : ''}</span>
            <Flex direction="row" gap="9px">
              <ButtonAddFavorite><FontAwesomeIcon icon={faHeart} /></ButtonAddFavorite>
              <ButtonShare><FontAwesomeIcon icon={faShare} /></ButtonShare>
              <ButtonAddCart><FontAwesomeIcon icon={faCartPlus} /></ButtonAddCart>
            </Flex>
          </Item>
          <Item>
            <img src={data['products'] ? data['products']['5']['image'] : ''} alt="" />
            <span>{data['products'] ? data['products']['5']['name'] : ''}</span>
            <span className='price'>R$ {data['products'] ? data['products']['5']['price'] : ''}</span>
            <Flex direction="row" gap="9px">
              <ButtonAddFavorite><FontAwesomeIcon icon={faHeart} /></ButtonAddFavorite>
              <ButtonShare><FontAwesomeIcon icon={faShare} /></ButtonShare>
              <ButtonAddCart><FontAwesomeIcon icon={faCartPlus} /></ButtonAddCart>
            </Flex>
          </Item>
          <Item>
            <img src={data['products'] ? data['products']['6']['image'] : ''} alt="" />
            <span>{data['products'] ? data['products']['6']['name'] : ''}</span>
            <span className='price'>R$ {data['products'] ? data['products']['6']['price'] : ''}</span>
            <Flex direction="row" gap="9px">
              <ButtonAddFavorite><FontAwesomeIcon icon={faHeart} /></ButtonAddFavorite>
              <ButtonShare><FontAwesomeIcon icon={faShare} /></ButtonShare>
              <ButtonAddCart><FontAwesomeIcon icon={faCartPlus} /></ButtonAddCart>
            </Flex>
          </Item>
          <Item>
            <img src={data['products'] ? data['products']['7']['image'] : ''} alt="" />
            <span>{data['products'] ? data['products']['7']['name'] : ''}</span>
            <span className='price'>R$ {data['products'] ? data['products']['7']['price'] : ''}</span>
            <Flex direction="row" gap="9px">
              <ButtonAddFavorite><FontAwesomeIcon icon={faHeart} /></ButtonAddFavorite>
              <ButtonShare><FontAwesomeIcon icon={faShare} /></ButtonShare>
              <ButtonAddCart><FontAwesomeIcon icon={faCartPlus} /></ButtonAddCart>
            </Flex>
          </Item>
          <Item>
            <img src={data['products'] ? data['products']['8']['image'] : ''} alt="" />
            <span>{data['products'] ? data['products']['8']['name'] : ''}</span>
            <span className='price'>R$ {data['products'] ? data['products']['8']['price'] : ''}</span>
            <Flex direction="row" gap="9px">
              <ButtonAddFavorite><FontAwesomeIcon icon={faHeart} /></ButtonAddFavorite>
              <ButtonShare><FontAwesomeIcon icon={faShare} /></ButtonShare>
              <ButtonAddCart><FontAwesomeIcon icon={faCartPlus} /></ButtonAddCart>
            </Flex>
          </Item>
          <Item>
            <img src={data['products'] ? data['products']['9']['image'] : ''} alt="" />
            <span>{data['products'] ? data['products']['9']['name'] : ''}</span>
            <span className='price'>R$ {data['products'] ? data['products']['9']['price'] : ''}</span>
            <Flex direction="row" gap="9px">
              <ButtonAddFavorite><FontAwesomeIcon icon={faHeart} /></ButtonAddFavorite>
              <ButtonShare><FontAwesomeIcon icon={faShare} /></ButtonShare>
              <ButtonAddCart><FontAwesomeIcon icon={faCartPlus} /></ButtonAddCart>
            </Flex>
          </Item>
        </Flex>
        <Flex className='btns' direction="row" justify="space-between">
          <ButtonDirec className='buttons-direc' onClick={handleLeftClick}>
            <FontAwesomeIcon icon={faCircleChevronLeft} />
          </ButtonDirec>
          <ButtonDirec className='buttons-direc' onClick={handleRightClick}>
            <FontAwesomeIcon icon={faCircleChevronRight} />
          </ButtonDirec>
        </Flex>
      </Flex>

      <Footer>
        <Flex direction="row">
          <h2>Contate-nos:</h2>
          <ButtonSocial><FontAwesomeIcon className='facebook' icon={faFacebook} /></ButtonSocial>
          <ButtonSocial><FontAwesomeIcon className='twitter' icon={faTwitter} /></ButtonSocial>
          <ButtonSocial><FontAwesomeIcon className='whatsapp' icon={faWhatsapp} /></ButtonSocial>
          <ButtonSocial><FontAwesomeIcon className='tiktok' icon={faTiktok} /></ButtonSocial>
          <img className='footerLogo' src={LogoImg} alt="Background Image" />
          <ButtonSocial><FontAwesomeIcon icon={faEnvelope} /></ButtonSocial>
          <EmailBar type="text"
            placeholder='Receba ofertas e novidades por email...' />
          <ButtonCheck><FontAwesomeIcon className='icon' icon={faCheck} /></ButtonCheck>
        </Flex>
      </Footer>
    </Container>
  )
}

export default App




// e toastify