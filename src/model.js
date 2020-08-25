import img from './assets/image.jpg'
import {ImageBlock, TextBlock, TitleBlock, TextColumnsBlock} from './classes/blocks'
import {css} from './utils';

export const model = [
  new TitleBlock( 'Конструктор на чистом JavaScript', {
    tag: 'h2',
    styles: css({
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center'
    })
  }),
  new ImageBlock(img, {
    styles: 'padding: 2rem 0; text-align: center',
    alt: 'my image',
    imageStyles: 'width: 500px;'
  }),
  new TextBlock('Lorem ipsum dolor sit amet, consectetur adipisicing elit.', {
    styles: css({
      background: 'darkblue',
      color: 'yellow',
      padding: '1rem',
    })
  }),
  new TextColumnsBlock([
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  ],{
    styles: 'padding: 2rem 1rem;'
  }),
  new TextBlock('Lorem ipsum dolor sit amet, consectetur adipisicing elit.', {
    styles: css({
      background: '#ccc',
      color: 'black',
      padding: '1rem',
    })
  }),
]