import React from 'react';
import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { createUseStyles } from 'react-jss';
import { useMeasure } from 'react-use';
import classNames from 'classnames';
import Richie from '../../assets/img/richie.png';
import BootstrapLogo from '../../assets/img/bootstrap.svg';
import StorybookLogo from '../../assets/img/storybbok.png';
import FormikLogo from '../../assets/img/formik.jpeg';
import ApexLogo from '../../assets/img/apexcharts.png';
import Item1 from '../../assets/img/animation-items/item.png';
import Item3 from '../../assets/img/animation-items/item3.png';
import Item4 from '../../assets/img/animation-items/item4.png';
import Item5 from '../../assets/img/animation-items/item5.png';
import Item6 from '../../assets/img/animation-items/item6.png';
import Item7 from '../../assets/img/animation-items/item7.png';
import Item8 from '../../assets/img/animation-items/item8.png';
import Item9 from '../../assets/img/animation-items/item9.png';
import Item10 from '../../assets/img/animation-items/item10.png';
import Item11 from '../../assets/img/animation-items/item11.png';
import Item12 from '../../assets/img/animation-items/item12.png';
import Item13 from '../../assets/img/animation-items/item13.png';
import Item14 from '../../assets/img/animation-items/item14.png';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Page from '../../layout/Page/Page';
import Logo from '../../components/Logo';
import Icon from '../../components/icon/Icon';

const useStyles = createUseStyles({
	// stylelint-disable
	intro: {
		zIndex: 200,
		overflow: 'hidden',
	},

	introImageWrapper: {
		zIndex: 1,
	},

	introImage: {
		backgroundImage: `url(${Richie})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		height: '100%',

		'@media (min-width: 992px)': {
			backgroundPosition: 'center right',
			transform: 'translateX(10vw)',
		},
	},

	introContentWrapper: {
		zIndex: 2,
	},

	animation: {
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		display: 'flex',
		overflow: 'hidden',
		width: '100%',
		height: '100vh',
		alignItems: 'flex-start',
		justifyContent: 'center',
	},

	item: {
		position: 'relative',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		transformStyle: 'preserve-3d',
		willChange: 'transform',
	},

	item1: {
		top: '10%',
		width: 20,
		height: 20,
		backgroundImage: `url(${Item1})`,
	},

	item3: {
		top: '37%',
		left: '-30%',
		width: 45,
		height: 45,
		backgroundImage: `url(${Item3})`,
	},

	item4: {
		width: 15,
		height: 15,
		margin: 'auto 10px',
		backgroundImage: `url(${Item4})`,
	},

	item5: {
		top: '78%',
		right: '24%',
		bottom: 'auto',
		left: 'auto',
		width: 12,
		height: 12,
		backgroundImage: `url(${Item5})`,
	},

	item6: {
		top: '53%',
		right: '20%',
		bottom: 'auto',
		left: 'auto',
		width: 10,
		height: 10,
		backgroundImage: `url(${Item6})`,
	},

	item7: {
		top: '60%',
		right: '0%',
		bottom: 'auto',
		left: '0%',
		width: 25,
		height: 25,
		backgroundImage: `url(${Item7})`,
	},

	item8: {
		position: 'absolute',
		top: 'auto',
		right: '8%',
		bottom: '14%',
		width: 44,
		height: 44,
		backgroundImage: `url(${Item8})`,
	},

	item9: {
		top: '32%',
		bottom: 'auto',
		left: '16%',
		width: 10,
		height: 10,
		backgroundImage: `url(${Item9})`,
	},

	item10: {
		top: '32%',
		right: '-35%',
		width: 32,
		height: 32,
		backgroundImage: `url(${Item10})`,
	},

	item11: {
		top: '71%',
		right: 'auto',
		bottom: 'auto',
		left: '38%',
		width: 20,
		height: 20,
		backgroundImage: `url(${Item11})`,
	},

	item12: {
		top: '73%',
		right: 'auto',
		bottom: 'auto',
		left: '-44%',
		width: 18,
		height: 18,
		backgroundImage: `url(${Item12})`,
	},

	item13: {
		top: '56%',
		right: 'auto',
		bottom: 'auto',
		left: '30%',
		width: 12,
		height: 12,
		backgroundImage: `url(${Item13})`,
	},

	item14: {
		top: '93%',
		right: '-22%',
		bottom: 'auto',
		left: '0%',
		width: 18,
		height: 18,
		backgroundImage: `url(${Item14})`,
	},

	logoWrapper: {
		height: 300,

		'@media (minwidth: 992px)': {
			height: 450,
		},
	},

	bootstrapLogo: {
		height: '100%',
		backgroundImage: `url(${BootstrapLogo})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
	},

	storybookLogo: {
		height: '100%',
		backgroundImage: `url(${StorybookLogo})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
	},

	formikLogo: {
		height: '100%',
		backgroundImage: `url(${FormikLogo})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
	},

	apexLogo: {
		height: '100%',
		backgroundImage: `url(${ApexLogo})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
	},
	// stylelint-enable
});

const Index: NextPage = () => {
	const classes = useStyles();
	const [ref, { height }] = useMeasure<HTMLDivElement>();

	return (
		<PageWrapper ref={ref}>
			<Head>
				<title>brockai - Prototypes</title>
			</Head>
			<Page>
				<div id='intro' className='scroll-margin'>
					<div className={classNames('row', 'h-fluid-min-100', classes.intro)}>
						<div
							className={classNames('col-lg-6', 'col-12', classes.introImageWrapper)}>
							<div className={classes.introImage} />
						</div>
						<div
							className={classNames(
								'col-lg-6',
								'col-12',
								'd-flex',
								'align-items-center',
								'justify-content-center',
								classes.introContentWrapper,
							)}>
							<div>
								<h1 className='display-1 mb-4'>
									AI Prototypes <Logo height={70} />
								</h1>
								<p className='display-6 mb-4'>
								AI with continuous human-in-the-loop feedback & model training.
								</p>
								<p className='h2 mb-5'>
									Grow and improve business processes and{' '}
									<span className='text-info'>customer interactions intelligently.</span>
								</p>
								<div className='col-12'>
										<div className='row g-3'>
											<div className='col-12'>
												<div className='d-flex align-items-center'>
													<div className='flex-shrink-0'>
														<Icon icon='Mail' size='3x' color='info' />
													</div>
													<div className='flex-grow-1 ms-3'>
														<div className='fw-bold fs-5 mb-0'>
															bclayton403@gmail.com
														</div>
														<div className='text-muted'>
															Email Address
														</div>
													</div>
												</div>
											</div>
											<div className='col-12'>
												<div className='d-flex align-items-center'>
													<div className='flex-shrink-0'>
														<Icon
															icon='PhoneIphone'
															size='3x'
															color='info'
														/>
													</div>
													<div className='flex-grow-1 ms-3'>
														<div className='fw-bold fs-5 mb-0'>
															403-465-2151
														</div>
														<div className='text-muted'>Phone</div>
													</div>
												</div>
											</div>
										</div>
									</div>
							</div>
						</div>
					</div>
					<div className={classes.animation}>
						<motion.div
							animate={{
								x: [height * -0.3, height * -0.35, height * -0.3],
								y: [height * 0.2, height * 0.25, height * 0.2],
							}}
							transition={{
								duration: 15,
								ease: 'linear',
								times: [0, 0.5, 1],
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className={classNames(classes.item, classes.item1)}
						/>
						<motion.div
							animate={{
								x: [0, -4, 0],
								rotate: [0, 180, 360],
							}}
							transition={{
								duration: 25,
								ease: 'linear',
								times: [0, 0.5, 1],
								repeat: Infinity,
								repeatType: 'loop',
							}}
						/>
						<motion.div
							animate={{
								x: [-48, 0, -48],
								y: [-170, 0, -170],
								rotate: [0, 180, 360],
							}}
							transition={{
								duration: 32,
								ease: 'linear',
								times: [0, 0.5, 1],
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className={classNames(classes.item, classes.item3)}
						/>
						<motion.div
							animate={{
								y: [0, 150, 0],
							}}
							transition={{
								duration: 18,
								ease: 'linear',
								times: [0, 0.5, 1],
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className={classNames(classes.item, classes.item4)}
						/>
						<motion.div
							animate={{
								x: [0, 200, 0],
								y: [0, 200, 0],
							}}
							transition={{
								duration: 46,
								ease: 'linear',
								times: [0, 0.5, 1],
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className={classNames(classes.item, classes.item5)}
						/>
						<motion.div
							animate={{
								x: [0, -150, 0],
							}}
							transition={{
								duration: 22,
								ease: 'linear',
								times: [0, 0.5, 1],
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className={classNames(classes.item, classes.item6)}
						/>
						<motion.div
							animate={{
								x: [0, -300, 0],
								y: [0, -100, 0],
							}}
							transition={{
								duration: 22,
								ease: 'linear',
								times: [0, 0.5, 1],
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className={classNames(classes.item, classes.item7)}
						/>
						<motion.div
							animate={{
								x: [0, -200, 0],
								y: [0, -200, 0],
								rotate: [0, 180, 360],
							}}
							transition={{
								duration: 38,
								ease: 'linear',
								times: [0, 0.5, 1],
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className={classNames(classes.item, classes.item8)}
						/>
						<motion.div
							animate={{
								x: [0, 120, 0],
								y: [0, 120, 0],
								rotate: [0, 180, 360],
							}}
							transition={{
								duration: 54,
								ease: 'linear',
								times: [0, 0.5, 1],
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className={classNames(classes.item, classes.item9)}
						/>
						<motion.div
							animate={{
								x: [50, 50, 50],
								y: [0, 140, 0],
								rotate: [0, 180, 360],
							}}
							transition={{
								duration: 15,
								ease: 'linear',
								times: [0, 0.5, 1],
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className={classNames(classes.item, classes.item10)}
						/>
						<motion.div
							animate={{
								x: [0, -120, 0],
								y: [0, -120, 0],
							}}
							transition={{
								duration: 36,
								ease: 'linear',
								times: [0, 0.5, 1],
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className={classNames(classes.item, classes.item11)}
						/>
						<motion.div
							animate={{
								x: [0, 100, 0],
								y: [0, -100, 0],
							}}
							transition={{
								duration: 34,
								ease: 'linear',
								times: [0, 0.5, 1],
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className={classNames(classes.item, classes.item12)}
						/>
						<motion.div
							animate={{
								x: [0, -200, 0],
								y: [0, -50, 0],
							}}
							transition={{
								duration: 34,
								ease: 'linear',
								times: [0, 0.5, 1],
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className={classNames(classes.item, classes.item13)}
						/>
						<motion.div
							animate={{
								x: [0, 200, 0],
								y: [0, -200, 0],
							}}
							transition={{
								duration: 34,
								ease: 'linear',
								times: [0, 0.5, 1],
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className={classNames(classes.item, classes.item14)}
						/>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		// @ts-ignore
		...(await serverSideTranslations(locale, ['common', 'menu'])),
	},
});

export default Index;
