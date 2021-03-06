import React from 'react';
import moment from 'moment';
import 'moment/locale/pt';
import 'animate.css';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Countdown from '../containers/countdown';
import Graph from '../containers/graph';
// import ModeToggle from '../components/mode_toggle';

const INDIVIDUAL_COLORS = ['black', 'white'];
const COLORS = [
  'black',
  'white',
  'gray',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'indigo',
  'purple',
  'pink',
];

const buildUrl = (title, color, bg) => {
  if (typeof window === 'undefined')
    return 'https://covid-countdown.netlify.app/share/';

  const url = new URL('https://covid-countdown.netlify.app/share/');

  if (title) {
    url.searchParams.append('title', title);
  }
  if (color) {
    url.searchParams.append('color', color);
  }
  if (bg) {
    url.searchParams.append('bg', bg);
  }

  return url.href;
};

function IndexPage() {
  const [showModal, setShowModal] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const [title, setTitle] = React.useState(null);
  const [textColor, setTextColor] = React.useState(null);
  const [backgroundColor, setBackgroundColor] = React.useState(null);

  const url = buildUrl(title, textColor, backgroundColor);
  moment.locale('pt');
  return (
    <Layout>
      <SEO keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]} />
      {/* <ModeToggle /> */}
      <div className="absolute right-0 sm:right-auto w-3/4 sm:w-full text-right sm:text-center p-4 sm:left-0">
        <h1 className="animate__animated animate__fadeIn animate__delay-5s text-2xl uppercase font-bold sm:text-3xl">
          Covid Countdown
        </h1>
        <h2 className="text-sm sm:text-base animate__animated animate__fadeIn animate__delay-5s">
          Esta pandemia tem os dias contados
        </h2>
      </div>
      <div className="h-screen w-full flex flex-col justify-center">
        <Countdown />
      </div>
      <div className="w-full flex flex-col justify-center py-16">
        <h2 className="text-3xl font-black text-center py-2 pb-8 px-1 sm:px-4">
          Quantos dias faltam para estarmos juntos outra vez?
        </h2>
        <p className="text-sm text-grey-dark text-justify px-1 sm:px-4 py-1">
          Há uma pergunta que todos temos na cabeça:{' '}
          <span className="font-black">
            quanto tempo falta para isto acabar?
          </span>
        </p>
        <p className="text-sm text-grey-dark text-justify px-1 sm:px-4 py-1">
          A pandemia da <span className="font-black">COVID-19</span> é um alvo
          em movimento. É um vírus que não entendemos completamente, e que
          nenhum cientista consegue ainda garantir como vai evoluir - ou quando
          regressaremos à normalidade. As medidas rígidas de distanciamento
          físico e social podem continuar em vigor durante vários meses, ou até
          mais de um ano. Mas pior que o distanciamento é a incerteza. O
          desconforto da distância é ainda mais difícil de suportar quando não
          há um fim à vista.
        </p>
        <p className="text-sm text-grey-dark text-justify px-1 sm:px-4 py-1">
          É mais difícil sermos optimistas se não sabemos quando as coisas
          voltarão ao normal. É certo que nem tudo vai ser como dantes, e que
          este normal será um{' '}
          <span className="italic">&quot;novo normal&quot;</span>. Ainda assim,
          precisamos de uma luz ao fundo do túnel, por mais pequena e simbólica
          que seja.
        </p>
        <p className="text-sm text-grey-dark text-justify px-1 sm:px-4 py-1">
          Foi por isso que nasceu o{' '}
          <span className="font-black">COVID COUNTDOWN</span>. Um contador para
          o fim do distanciamento social, que todos dias recalcula a data final,
          com base em diversas fontes de dados oficiais. Todos os dias teremos
          uma nova previsão de quanto tempo falta para podermos voltar a vibrar
          num estádio de futebol, gritar num concerto ou dançar numa discoteca.
        </p>
        <p className="text-sm text-grey-dark text-justify px-1 sm:px-4 py-1">
          Apesar de ter sido desenvolvida por aspirantes a Data Scientists, esta
          ideia não pretende ser uma previsão 100% certa, mas sim uma
          aproximação do dia pelo qual todos ansiamos. Um{' '}
          <span className="italic">&quot;bitaite&quot;</span> bem informado que
          passa uma mensagem de esperança e optimismo, que nos ajuda olhar para
          as oportunidades do futuro e não só para os problemas de hoje. Porque
          nada dura para sempre, e até esta pandemia tem os dias contados.
        </p>
        <p className="text-sm text-grey-dark text-justify px-1 sm:px-4 py-1">
          O que vais fazer quando o contador chegar ao fim? Como vai ser o
          primeiro dia do resto da tua vida? Personaliza o contador com o teu
          objetivo pós-pandemia, escolha as cores e partilha onde quiseres ou
          coloca no teu site
        </p>
        <div className="flex justify-center pt-6">
          <button
            onClick={() => setShowModal(true)}
            className="focus:outline-none w-full sm:w-auto border font-bold border-black hover:border-white hover:text-white hover:bg-black py-2 px-8"
          >
            Criar Contador
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center">
        <h2 className="text-2xl font-black text-left py-2 px-1 sm:px-4">
          Como é feita a previsão
        </h2>
        <p className="text-sm text-grey-dark text-justify px-1 sm:px-4 py-1">
          Por vezes ouvimos nas notícias ou briefings da DGS, o termo R0.
        </p>
        <p className="text-base font-bold text-grey-dark text-center px-1 sm:px-4 md:px-24 py-3">
          O R0 é o número básico de reprodução de uma epidemia, é definido como
          o número de infeções secundárias produzidas por uma única pessoa
          infetada, se o R0 for maior que 1, a epidemia espalha-se rapidamente,
          se R0 for menor que 1, a epidemia espalha-se de forma lenta.
        </p>
        <p className="text-sm text-grey-dark text-justify px-1 sm:px-4 py-1 pb-8">
          Embora o R0 seja uma medida útil, tem como defeito o facto de ser um
          número estático.
        </p>
        <h2 className="text-xl font-black text-left px-1 sm:px-4">
          Evolução Rt
        </h2>
        <Graph />
        <p className="text-sm text-grey-dark text-justify px-1 sm:px-4 py-1 pt-8">
          Como humanos, somos adaptáveis, o nosso comportamento muda, e isso
          altera o valor efetivo do R a qualquer momento. Como o valor muda tão
          rapidamente, o Rt (o valor R para um determinado tempo t) será um
          valor mais próximo da realidade. Para sermos ainda mais próximos da
          realidade, não precisamos apenas conhecer Rt, precisamos conhecer Rt
          por região. A epidemia na região Norte é muito diferente da do
          Alentejo, por exemplo.
        </p>
        <p className="text-sm text-grey-dark text-justify px-1 sm:px-4 py-1">
          Para tentarmos calcular o Rt para cada região de Portugal, estamos a
          utilizar uma adaptação do método específico que Bettencourt & Ribeiro
          descreveram no seu artigo de 2008:{' '}
          <a
            href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0002185"
            rel="noopener noreferrer"
            target="_blank"
            className="underline"
          >
            &quot;Real Time Bayesian Estimation of the Epidemic Potential of
            Emerging Infectious Diseases&quot;
          </a>{' '}
          e que está descrito neste{' '}
          <a
            href="http://systrom.com/blog/the-metric-we-need-to-manage-covid-19/"
            rel="noopener noreferrer"
            target="_blank"
            className="underline"
          >
            post
          </a>{' '}
          no blog de{' '}
          <a
            href="http://systrom.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="underline"
          >
            Kevin Systrom
          </a>
          , co-fundador do Instagram.
        </p>
        <p className="text-sm text-grey-dark text-justify px-1 sm:px-4 py-1">
          Utilizámos o{' '}
          <a
            href="https://github.com/k-sys/covid-19/blob/master/Realtime%20R0.ipynb"
            rel="noopener noreferrer"
            target="_blank"
            className="underline"
          >
            Jupiter Notebook
          </a>{' '}
          de Kevin Systrom.
        </p>
        <div className="flex justify-center pt-6">
          <button
            onClick={() => setShowModal(true)}
            className="focus:outline-none w-full sm:w-auto border font-bold border-black hover:border-white hover:text-white hover:bg-black py-2 px-8"
          >
            Criar Contador
          </button>
        </div>
        <h2 className="text-sm font-bold font-black text-left pt-16 px-1 sm:px-4">
          Algumas alterações:
        </h2>
        <ul className="list-disc ml-6 sm:ml-12">
          <li className="text-xs text-grey-dark pr-4 py-1">
            Utilizámos como fonte de dados o dataset covid19pt-data da Data
            Science for Social Good Portugal:{' '}
            <a
              href="https://github.com/dssg-pt/covid19pt-data/blob/master/data.csv"
              rel="noopener noreferrer"
              target="_blank"
              className="underline"
            >
              https://github.com/dssg-pt/covid19pt-data/blob/master/data.csv
            </a>
          </li>
          <li className="text-xs text-grey-dark pr-4 py-1">
            Adaptamos o notebook para que se adequasse às regiões de Portugal
          </li>
          <li className="text-xs text-grey-dark pr-4 py-1">
            Fizemos pequenas alterações no algoritmo, de modo a que a se
            ajustasse à menor variação de novos casos diários em Portugal (em
            comparação com os EUA)
          </li>
        </ul>
        <h2 className="text-sm font-bold font-black text-left pt-3 px-1 sm:px-4">
          Previsão da data de regresso:
        </h2>
        <ul className="list-disc ml-6 sm:ml-12">
          <li className="text-xs text-grey-dark pr-4 py-1">
            Definimos uma data &quot;baseline&quot;, 1 de Outubro de 2020, com o
            Rt do dia 7 de Maio de 2020, tendo em conta o anúncio do
            cancelamento dos Festivais de Música até 30 de Setembro de 2020,
            feito pelo Governo neste dia.
          </li>
          <li className="text-xs text-grey-dark pr-4 py-1">
            Por cada variação do Rt, a data de regresso é ajustada, de forma
            positiva ou negativa, por cada variação do Rt, sendo que por cada
            0,01 que o valor do Rt aumenta ou diminui, a data varia 5h.
          </li>
        </ul>
        <h2 className="text-sm font-bold font-black text-left pt-3 px-1 sm:px-4">
          Transparência e contribuições:{' '}
          <span className="font-normal text-xs">
            (links para repositórios, notebook, csv, etc)
          </span>
        </h2>
        <ul className="list-disc ml-6 sm:ml-12 pb-8">
          <li className="text-xs text-grey-dark pr-4 py-1">
            Proident esse quis eu qui aliquip non pariatur id aute incididunt.
            Laboris dolor eiusmod ullamco quis. Consequat occaecat in aliquip
            voluptate nulla reprehenderit.
          </li>
          <li className="text-xs text-grey-dark pr-4 py-1">
            Velit tempor ut sit elit eiusmod dolor Lorem anim velit proident
            nisi reprehenderit. Dolor adipisicing qui incididunt laborum eu elit
            ut non laborum ullamco amet mollit commodo ea. Proident labore
            consequat enim nisi et duis et commodo pariatur.
          </li>
          <li className="text-xs text-grey-dark pr-4 py-1">
            Veniam amet sit proident magna velit exercitation anim id in dolor
            quis adipisicing. Elit do sint aliquip ut enim veniam magna quis
            labore cupidatat nulla consequat irure. Pariatur excepteur eu dolore
            mollit eu amet officia Lorem. Amet consectetur consectetur ullamco
            qui aliquip ad cupidatat occaecat.
          </li>
        </ul>
      </div>
      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 w-11/12 sm:w-4/6 lg:w-1/2 max-w-5xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="hidden xs:flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-2xl font-semibold">Criar Contador</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <svg viewBox="0 0 512 512">
                        <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">
                      Título
                    </label>
                    <input
                      onChange={(event) => {
                        setTitle(event.target.value);
                        setCopied(false);
                      }}
                      className="appearance-none border border-black w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="title"
                      type="text"
                      placeholder="Texto acima do contador"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">
                      Cor do texto
                    </label>
                    <div className="flex flex-row flex-wrap items-center justify-around">
                      {COLORS.map((color) => {
                        const finalColor =
                          INDIVIDUAL_COLORS.indexOf(color) !== -1
                            ? `bg-${color}`
                            : `bg-${color}-700`;

                        return (
                          <button
                            onClick={() => {
                              if (textColor === color) {
                                setTextColor('');
                              } else {
                                setTextColor(color);
                              }
                              setCopied(false);
                            }}
                            key={color}
                            className={`focus:outline-none opacity-50 w-6 h-6 sm:w-8 sm:h-8 rounded-full mr-2 mb-2 ${finalColor} ${
                              color === 'white' ? 'border-black border' : ''
                            } ${textColor === color ? 'opacity-100' : ''}`}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">
                      Cor de fundo
                    </label>
                    <div className="flex flex-row flex-wrap items-center justify-around">
                      {COLORS.map((color) => {
                        const finalColor =
                          INDIVIDUAL_COLORS.indexOf(color) !== -1
                            ? `bg-${color}`
                            : `bg-${color}-700`;

                        return (
                          <button
                            onClick={() => {
                              if (backgroundColor === color) {
                                setBackgroundColor('');
                              } else {
                                setBackgroundColor(color);
                              }
                              setCopied(false);
                            }}
                            key={color}
                            className={`focus:outline-none opacity-50 w-6 h-6 sm:w-8 sm:h-8 rounded-full mr-2 mb-2 ${finalColor} ${
                              color === 'white' ? 'border-black border' : ''
                            } ${
                              backgroundColor === color ? 'opacity-100' : ''
                            }`}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className="mb-4 hidden xs:block">
                    <label className="block text-sm font-bold mb-2">
                      Url de partilha
                    </label>
                    <p className="text-sm">{url}</p>
                  </div>
                </div>
                <div className="flex items-center justify-end p-2 sm:p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="background-transparent font-bold px-6 py-2 outline-none focus:outline-none mr-1 mb-1 hover:underline text-sm sm:text-base"
                    type="button"
                    style={{ transition: 'all .15s ease' }}
                    onClick={() => setShowModal(false)}
                  >
                    Fechar
                  </button>
                  <button
                    className={`${
                      !copied
                        ? 'hover:border-black hover:text-black hover:bg-white'
                        : ''
                    } focus:outline-none w-auto border font-bold border-white bg-black text-white py-2 px-8 text-sm sm:text-base`}
                    type="button"
                    style={{ transition: 'all .15s ease' }}
                    onClick={() => {
                      navigator.clipboard.writeText(url);
                      setCopied(true);
                    }}
                  >
                    {!copied ? 'Copiar URL' : 'Copiado!'}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </Layout>
  );
}

export default IndexPage;
