import React, { Fragment } from 'react'
import learing1 from '../assets/img/education_01.svg'
import learning2 from '../assets/img/education_02.svg';
import learning3 from '../assets/img/education_03.svg';
const Home = () => {
    return (
        <Fragment>
            <div className="h-screen " >
                <section className="text-blueGray-700 " >
                    <div className="container flex flex-col items-center px-5 py-8 mx-auto">
                        <div className="flex flex-col w-full mb-12 text-left lg:text-center">
                            <h1 className="mx-auto mb-12 text-2xl font-semibold leading-none tracking-tighter text-black lg:w-1/2 sm:text-6xl title-font"> Votre avenir commence ici... </h1>
                            <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 lg:w-1/2"> En ouvrant la salle de classe grâce à l'apprentissage en ligne, CapDev permet à des millions d'apprenants de libérer leur potentiel et de devenir des acteurs du changement. </p>

                        </div>
                    </div>
                </section>
                {/* <section className="w-full h-96">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L30,133.3C60,139,120,149,180,181.3C240,213,300,267,360,245.3C420,224,480,128,540,96C600,64,660,96,720,128C780,160,840,192,900,224C960,256,1020,288,1080,266.7C1140,245,1200,171,1260,165.3C1320,160,1380,224,1410,256L1440,288L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
                </section> */}
                <section className="text-blueGray-700 ">
                    <div className="container items-center px-5 py-8 mx-auto lg:px-24">
                        <div className="flex flex-wrap mb-12 text-left">
                            <div className="w-full mx-auto lg:w-1/3">
                                <div className="p-6">
                                    <div className="inline-flex items-center justify-center flex-shrink-0 w-1/2 h-full mx-auto mb-5 text-black bg-blueGray-100 rounded-full">
                                        <img src={learing1} />
                                    </div>
                                    <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font"> Apprendre avec des enseignants de premier plan
                                    </h1>
                                    <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 ">Regardez en streaming des vidéos à la demande auprès d’universités et d’entreprises de premier plan telles que Yale, Google, IBM et bien plus . </p>
                                </div>
                            </div>
                            <div className="w-full mx-auto lg:w-1/3">
                                <div className="p-6">
                                    <div className="inline-flex items-center justify-center flex-shrink-0 w-1/2 h-full mx-auto mb-5 text-black bg-blueGray-100 rounded-full">
                                        <img src={learning2} />
                                    </div>
                                    <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font"> Acquérir des compétences grâce à un apprentissage pratique </h1>
                                    <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 ">Apprenez des compétences recherchées en science des données, conception, gestion de projet, marketing numérique, et plus encore, en moins de deux heures avec les Projets guidés</p>
                                </div>
                            </div>
                            <div className="w-full mx-auto lg:w-1/3">
                                <div className="p-6">
                                    <div className="inline-flex items-center justify-center flex-shrink-0 w-1/2 h-full mx-auto mb-5 text-black bg-blueGray-100 rounded-full">
                                        <img src={learning3} />
                                    </div>
                                    <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font"> Obtenez et partagez un certificat prestigieux </h1>
                                    <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 ">Mettez en valeurs vos nouvelles capacités avec un certificat de cours, de Projet guidé ou un Certificat Professionnel. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </Fragment>



    )
}

export default Home
