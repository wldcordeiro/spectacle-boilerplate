export {_, React} from './utils';

// Import React
import {h} from './utils';


// Import Spectacle Core tags
import {Appear, BlockQuote, Cite, CodePane, Deck, Fill, Heading, Image,
    Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle, Text,
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Import custom component
import Interactive from '../assets/interactive';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');


const images = {
    city: require('../assets/city.jpg'),
    kat: require('../assets/kat.png'),
    logo: require('../assets/formidable-logo.svg'),
    markdown: require('../assets/markdown.png'),
};

preloader(images);

const theme = createTheme({
    primary: '#ff4081',
});

export function Presentation() {
    return h(Spectacle, {theme}, [
        h(Deck, {
            transition: ['zoom', 'slide'],
            transitionDuration: 500,
        }, [
            h(Slide, {
                transition: ['zoom'],
                bgColor: 'primary',
            }, [
                h(Heading, {
                    size: 1,
                    fit: true,
                    caps: true,
                    lineHeight: 1,
                    textColor: 'black',
                }, 'Spectacle'),
                h(Heading, {
                    size: 1,
                    fit: true,
                    caps: true,
                }, 'A ReactJS Presentation Library'),
                h(Heading, {
                    size: 1,
                    fit: true,
                    caps: true,
                    textColor: 'black',
                }, 'Where You Can Write Your Decks In JSX'),
                h(Link, {
                    href: 'https://github.com/FormidableLabs/spectacle',
                }, h(Text, {
                    bold: true,
                    caps: true,
                    textColor: 'tertiary',
                }, 'View on Github')),
                h(Text, {
                    textSize: '1.5em',
                    margin: '20px 0px 0px',
                    bold: true,
                }, 'Hit Your Right Arrow To Begin!'),
            ]),
            h(Slide, {
                transition: ['slide'],
                bgColor: 'black',
                notes: [
                    'You can even put notes on your slide.',
                    ' How awesome is that?'].join(),
            }, [
                h(Image, {
                    src: images.kat.replace('/', ''),
                    margin: '0px auto 40px',
                    height: '293px',
                }),
                h(Heading, {
                    size: 2,
                    caps: true,
                    fit: true,
                    textColor: 'primary',
                    textFont: 'primary',
                }, 'Wait what?'),
            ]),
            h(Slide, {
                transition: ['zoom', 'slide'],
                bgColor: 'primary',
                notes: h('ul', [
                    h('li', 'talk about that'),
                    h('li', 'and that'),
                ]),
            }, [
                h(CodePane, {
                    lang: 'jsx',
                    source: require('raw!../assets/deck.example'),
                }),
            ]),
            h(Slide, {
                transition: ['slide'],
                bgImage: images.city.replace('/', ''),
                bgDarken: 0.75,
            }, [
                h(Appear, {fid: 1}, h(Heading, {
                    size: 1,
                    caps: true,
                    fit: true,
                    textColor: 'primary',
                }, 'Full Width')),
                h(Appear, {fid: 2}, h(Heading, {
                    size: 1,
                    caps: true,
                    fit: true,
                    textColor: 'tertiary',
                }, 'Adjustable Darkness')),
                h(Appear, {fid: 3}, h(Heading, {
                    size: 1,
                    caps: true,
                    fit: true,
                    textColor: 'primary',
                }, 'Background Imagery')),
            ]),
            h(Slide, {
                transition: ['zoom', 'fade'],
                bgColor: 'primary',
            }, [
                h(Heading, {caps: true, fit: true}, 'Flexible Layouts'),
                h(Layout, [
                    h(Fill, h(Heading, {
                        size: 4,
                        caps: true,
                        textColor: 'secondary',
                        bgColor: 'white',
                        margin: 10,
                    }, 'Left')),
                    h(Fill, h(Heading, {
                        size: 4,
                        caps: true,
                        textColor: 'secondary',
                        bgColor: 'white',
                        margin: 10,
                    }, 'Right')),
                ]),
            ]),
            h(Slide, {transition: ['slide'], bgColor: 'black'}, h(BlockQuote, [
                h(Quote, 'Wonderfully formatted quotes'),
                h(Cite, 'Ken Wheeler'),
            ])),
            h(Slide, {
                transition: ['spin', 'zoom'],
                bgColor: 'tertiary',
            }, [
                h(Heading, {
                    caps: true,
                    fit: true,
                    size: 1,
                    textColor: 'primary',
                }, 'Inline Markdown'),
                h(Markdown, `
![Markdown Logo](${images.markdown.replace('/', '')})

You can write inline images, [Markdown Links](http://commonmark.org),
paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
                `),
            ]),
            h(Slide, {
                transition: ['zoom', 'slide'],
                bgColor: 'primary',
            }, [
                h(Heading, {
                    caps: true,
                    fit: true,
                    size: 1,
                    textColor: 'tertiary',
                }, 'Smooth'),
                h(Heading, {
                    caps: true,
                    fit: true,
                    size: 1,
                    textColor: 'secondary',
                }, 'Combinable Transitions'),
            ]),
            h(Slide, {
                transition: ['fade'],
                bgColor: 'secondary',
                textColor: 'primary',
            }, h(List, [
                h(Appear, h(ListItem, 'Inline style based theme system')),
                h(Appear, h(ListItem, 'Autofit text')),
                h(Appear, h(ListItem, 'Flexbox layout system')),
                h(Appear, h(ListItem, 'React-Router navigation')),
                h(Appear, h(ListItem, 'PDF export')),
                h(Appear, h(ListItem, 'And...')),
            ])),
            h(Slide, {
                transition: 'slide',
                bgColor: 'primary',
            }, [
                h(Heading, {
                    size: 1,
                    caps: true,
                    fit: true,
                    textColor: 'tertiary',
                }, 'Your presentations are interactive'),
                h(Interactive),
            ]),
            h(Slide, {
                transition: ['spin', 'slide'],
                bgColor: 'tertiary',
            }, [
                h(Heading, {
                    size: 1,
                    caps: true,
                    fit: true,
                    lineHeight: 1.5,
                    textColor: 'primary',
                }, 'Made with love in Seattle by'),
                h(Link, {
                    href: 'http://www.formidablelabs.com',
                }, h(Image, {width: '100%', src: images.logo})),
            ]),
        ]),
    ]);
}