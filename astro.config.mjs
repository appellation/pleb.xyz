import prefetch from '@astrojs/prefetch';
import presetIcons from '@unocss/preset-icons';
import solidJs from "@astrojs/solid-js";
import { defineConfig } from 'astro/config';
import classNames from 'classnames';
import { presetUno } from 'unocss';
import Unocss from 'unocss/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    solidJs(),
    Unocss({
      presets: [presetIcons(), presetUno({ dark: 'media' })],
      shortcuts: {
        'list-arrow': classNames(
          'relative',
          'before:transition-left',
          'before:pointer-events-none',
          'before:absolute',
          'before:my-auto',
          'before:inset-y-0',
          'before:-left-8',
          'hover:before:-left-6',
          'before:i-fa-solid-arrow-right',
          'before:block',
          'before:content-empty',
          'before:w-4',
          'before:h-4',
        ),
      },
      theme: {
        fontFamily: {
          serif: ['"Roboto Slab"', 'serif']
        },
        animation: {
          durations: {
            'bg-pulse': '4s'
          },
          timingFns: {
            'bg-pulse': 'ease-in-out'
          },
          counts: {
            'bg-pulse': 'infinite'
          },
          keyframes: {
            'bg-pulse': `{
                0%,
                100% {
                  background-position-y: 0%;
                }
                50% {
                  background-position-y: 80%;
                }
              }`
          }
        }
      }
    }),
    prefetch(),
  ],
  site: 'https://wnelson.dev',
});
