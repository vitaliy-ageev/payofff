;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[931],
	{
		563: function (e, s, i) {
			Promise.resolve().then(i.bind(i, 9424)),
				Promise.resolve().then(i.bind(i, 758)),
				Promise.resolve().then(i.bind(i, 8136)),
				Promise.resolve().then(i.bind(i, 8899)),
				Promise.resolve().then(i.bind(i, 640)),
				Promise.resolve().then(i.bind(i, 8466)),
				Promise.resolve().then(i.bind(i, 6239)),
				Promise.resolve().then(i.bind(i, 5989))
		},
		3734: function (e, s, i) {
			'use strict'
			i.d(s, {
				Z: function () {
					return r
				},
			})
			var t = i(7437),
				_ = i(4839),
				n = i(9516),
				c = i.n(n)
			function r(e) {
				let { title: s, subtitle: i, color: n } = e
				return (0, t.jsxs)('div', {
					className: (0, _.Z)(c().section__title),
					children: [
						(0, t.jsx)('h2', {
							style: { color: n ? '#fff' : '' },
							children: s,
						}),
						i &&
							(0, t.jsx)('h3', {
								style: { color: n ? '#fff' : '' },
								children: i,
							}),
					],
				})
			}
		},
		1515: function (e, s, i) {
			'use strict'
			i.d(s, {
				Z: function () {
					return l
				},
			})
			var t = i(7437),
				_ = i(4839),
				n = i(6961),
				c = i.n(n)
			function r(e) {
				let {} = e
				return (0, t.jsx)('svg', {
					className: c().telegram,
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 25 25',
					children: (0, t.jsx)('path', {
						className: c().telegram__path,
						d: 'M3.8749 10.8854C9.24359 8.54631 12.8236 7.00426 14.6148 6.25922C19.7292 4.13198 20.7919 3.76245 21.4846 3.75012C21.6369 3.74756 21.9776 3.78532 22.1982 3.96436C22.3845 4.11554 22.4358 4.31976 22.4603 4.4631C22.4848 4.60643 22.5154 4.93295 22.4911 5.18808C22.214 8.10012 21.0147 15.1669 20.4046 18.4284C20.1465 19.8085 19.6382 20.2712 19.1461 20.3165C18.0766 20.4149 17.2645 19.6097 16.2287 18.9307C14.6078 17.8682 13.6921 17.2068 12.1188 16.17C10.3005 14.9718 11.4792 14.3133 12.5154 13.237C12.7866 12.9553 17.4987 8.66933 17.5899 8.28052C17.6013 8.23189 17.6119 8.05063 17.5042 7.95492C17.3965 7.85921 17.2376 7.89194 17.1229 7.91797C16.9604 7.95487 14.371 9.66634 9.35486 13.0524C8.61988 13.5571 7.95416 13.803 7.3577 13.7901C6.70015 13.7759 5.43528 13.4183 4.49498 13.1126C3.34166 12.7377 2.42503 12.5395 2.50485 11.9028C2.54642 11.5712 3.0031 11.2321 3.8749 10.8854Z',
					}),
				})
			}
			var a = i(3407),
				o = i.n(a)
			function l(e) {
				let { text: s } = e
				return (0, t.jsxs)('button', {
					className: (0, _.Z)('no-select', o().telegram_button),
					children: [(0, t.jsx)(r, {}), s],
				})
			}
		},
		9424: function (e, s, i) {
			'use strict'
			i.d(s, {
				default: function () {
					return o
				},
			})
			var t = i(7437),
				_ = i(4839),
				n = i(2265),
				c = i(1515),
				r = i(4588),
				a = i.n(r)
			function o(e) {
				let {} = e,
					s = (0, n.useRef)(null),
					i = () => {
						let e = s.current
						e &&
							(window.scrollY >= 770 && window.scrollY <= 4230
								? e.classList.add('fixed')
								: e.classList.remove('fixed')),
							console.log(window.scrollY)
					}
				return (
					(0, n.useEffect)(
						() => (
							window.addEventListener('scroll', i, !1),
							() => window.removeEventListener('scroll', i, !1)
						),
						[]
					),
					(0, t.jsx)('div', {
						className: (0, _.Z)(a().button_fixed),
						ref: s,
						children: (0, t.jsx)(c.Z, { text: 'Оплатить сервис' }),
					})
				)
			}
		},
		758: function (e, s, i) {
			'use strict'
			i.d(s, {
				default: function () {
					return d
				},
			})
			var t = i(7437),
				_ = i(4839),
				n = i(5202),
				c = i.n(n)
			function r(e) {
				let { title: s, description: i, background: n } = e
				return (0, t.jsxs)('div', {
					className: (0, _.Z)(''.concat(n), c().edge__item),
					children: [
						(0, t.jsx)('h3', { children: s }),
						(0, t.jsx)('p', { children: i }),
					],
				})
			}
			var a = i(3734),
				o = i(1404),
				l = i.n(o)
			function d(e) {
				let {} = e
				return (0, t.jsx)('div', {
					className: (0, _.Z)('section', l().advantages__section),
					children: (0, t.jsxs)('div', {
						className: (0, _.Z)('container'),
						children: [
							(0, t.jsx)(a.Z, { title: 'Основные преимущества' }),
							(0, t.jsx)('div', {
								className: (0, _.Z)(l().advantages__section__wrapper),
								children: (0, t.jsx)('div', {
									className: (0, _.Z)(l().advantages__section__items),
									children: [
										{
											id: 1,
											title: 'Скорость обработки',
											description:
												'У нас все отлажено и вам не придется ждать.',
											background: 'edge-1-bg',
										},
										{
											id: 2,
											title: 'Персональный подход',
											description:
												'Если у вас какая-то нестандартная задача, то мы постараемся ее решить именно так, как надо вам.',
											background: 'edge-2-bg',
										},
										{
											id: 3,
											title: 'Безупречная репутация',
											description:
												'Наши клиенты написали множество положительных отзывов.',
											background: 'edge-3-bg',
										},
									].map(e =>
										(0, t.jsx)(
											r,
											{
												title: e.title,
												description: e.description,
												background: e.background,
											},
											e.id
										)
									),
								}),
							}),
						],
					}),
				})
			}
		},
		8136: function (e, s, i) {
			'use strict'
			i.d(s, {
				default: function () {
					return m
				},
			})
			var t = i(7437),
				_ = i(4839),
				n = i(2265),
				c = i(5848),
				r = i.n(c)
			function a(e) {
				let { id: s, question: i, answer: c } = e,
					[a, o] = (0, n.useState)(null),
					l = (0, n.useRef)(null),
					d = (0, n.useRef)(null),
					m = function (e, s) {
						o(e)
						let i = d.current,
							t = l.current
						if (i && t) {
							let e = t.classList.toggle('open')
							i.classList.toggle('rotate-45'),
								e
									? (t.style.maxHeight = t.scrollHeight + 'px')
									: (t.style.maxHeight = '0px')
						}
					}
				return (0, t.jsxs)('li', {
					className: (0, _.Z)(r().faq__item),
					children: [
						(0, t.jsxs)('div', {
							className: (0, _.Z)(r().faq__item__header),
							onClick: e => m(s, e),
							ref: d,
							children: [
								(0, t.jsxs)('p', {
									className: (0, _.Z)(r().faq__item__subtitle),
									children: ['Вопрос ', s],
								}),
								(0, t.jsx)('p', {
									className: (0, _.Z)(r().faq__item__title),
									children: i,
								}),
							],
						}),
						(0, t.jsx)('div', {
							className: (0, _.Z)(r().faq__item__wrapper),
							ref: l,
							children: (0, t.jsx)('p', {
								className: (0, _.Z)(r().faq__item__answer),
								children: c,
							}),
						}),
					],
				})
			}
			var o = i(3734),
				l = i(8306),
				d = i.n(l)
			function m(e) {
				let {} = e
				return (0, t.jsx)('section', {
					className: (0, _.Z)(d().faq__section),
					children: (0, t.jsxs)('div', {
						className: (0, _.Z)('container'),
						children: [
							(0, t.jsx)(o.Z, { title: 'Частые вопросы' }),
							(0, t.jsxs)('div', {
								className: (0, _.Z)(d().faq__section__items),
								children: [
									(0, t.jsx)(a, {
										id: '1',
										question: 'Кто проводит платежи?',
										answer:
											'Платежи вы проводите самостоятельно, никаких доступов в ваши сервисы мы не попросим. Оператор вышлет платежные данные карты, которые вы сможете ввести в своем аккаунте, и провести платеж. Однако все чаще клиенты сами нас просят провести оплату за них. Особенно это важно, когда надо провести оплату через PayPal. Мы это, конечно, делаем, и дополнительно за эту услугу денег не берем.',
									}),
									(0, t.jsx)(a, {
										id: '2',
										question: 'Можно подключить подписку ежемесячно?',
										answer:
											'К сожалению, такая возможность доступна только тем, кто приобрел у нас персональную карту. Такая карта действует 1 год и никто, кроме вас, не будет ей пользоваться. Такую карту вы сможете привязать к своему аккаунту, чтобы с ее баланса списывались средства каждый месяц. Минимальная сумма первого пополнения — не менее 1000 долларов.',
									}),
									(0, t.jsx)(a, {
										id: '3',
										question:
											'Мой сервис нужно оплатить в рублях, я смогу это сделать?',
										answer:
											'Однако при расчете платежа оператор вам назовет не ту сумму платежа, которую вы видите в сервисе. Это связано с тем, что счет карты — в валюте (доллары США). И в момент оплаты в сервисе происходит обмен валюты, а курс рубля у западного банка не очень похож на курс ЦБ РФ.',
									}),
									(0, t.jsx)(a, {
										id: '4',
										question:
											'По какому курсу вы пересчитываете рубли в доллары / евро?',
										answer:
											'Откуда мы его берем? Поскольку курс валюты в ЦБ не совпадает с мнением банков в других странах, где у нас выпущены карты, то мы используем для расчетов внутренний курс, максимально приближенный к курсу Сбербанка на день оплаты. При этом важно смотреть не курс в онлайн-банке, а курс наличной валюты в отделениях — он максимально приближен к реальному зарубежом.',
									}),
									(0, t.jsx)(a, {
										id: '5',
										question:
											'У меня особые условия, можем обсудить с вами размер комиссии?',
										answer:
											'К сожалению, такая возможность доступна только тем, кто приобрел у нас персональную карту.',
									}),
								],
							}),
						],
					}),
				})
			}
		},
		8899: function (e, s, i) {
			'use strict'
			i.d(s, {
				default: function () {
					return a
				},
			})
			var t = i(7437),
				_ = i(4839),
				n = i(1515),
				c = i(9349),
				r = i.n(c)
			function a(e) {
				let {} = e
				return (0, t.jsx)('section', {
					className: (0, _.Z)(r().footer__section),
					children: (0, t.jsx)('div', {
						className: (0, _.Z)('container'),
						children: (0, t.jsxs)('div', {
							className: (0, _.Z)(r().footer__section__wrapper),
							children: [
								(0, t.jsx)('h1', {
									className: (0, _.Z)(r().footer__section__title),
									children: 'Оплачивайте зарубежные сервисы вместе с нами!',
								}),
								(0, t.jsx)('div', {
									className: r().footer__section__button,
									children: (0, t.jsx)(n.Z, { text: 'Оплатить сервис' }),
								}),
								(0, t.jsx)('p', {
									className: (0, _.Z)(r().footer__section__copyright),
									children: '\xa9 Payoff, 2024 г.',
								}),
							],
						}),
					}),
				})
			}
		},
		640: function (e, s, i) {
			'use strict'
			i.d(s, {
				MainSection: function () {
					return j
				},
			})
			var t = i(7437),
				_ = i(4839),
				n = i(1876),
				c = i.n(n)
			function r() {
				return (0, t.jsx)('svg', {
					className: c().check,
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 26 27',
					children: (0, t.jsx)('path', {
						className: c().check__path,
						'fill-rule': 'evenodd',
						'clip-rule': 'evenodd',
						d: 'M21.3753 7.34343C21.7839 7.78045 21.7609 8.46599 21.3239 8.87463L10.8968 18.6246C10.4804 19.014 9.83352 19.014 9.41708 18.6247L4.6775 14.1939C4.24043 13.7853 4.21735 13.0997 4.62595 12.6627C5.03454 12.2256 5.72008 12.2025 6.15714 12.6111L10.1568 16.3503L19.8441 7.29204C20.2811 6.8834 20.9666 6.90641 21.3753 7.34343Z',
					}),
				})
			}
			var a = i(1990),
				o = i.n(a)
			function l(e) {
				let { text: s } = e
				return (0, t.jsxs)('li', {
					className: (0, _.Z)('d-flex align-items', o().advantage),
					children: [(0, t.jsx)(r, {}), s],
				})
			}
			var d = i(7566),
				m = i.n(d)
			function v(e) {
				let {} = e
				return (0, t.jsx)('svg', {
					className: (0, _.Z)(m().logo),
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 823.76 191.44',
					children: (0, t.jsx)('g', {
						children: (0, t.jsxs)('g', {
							id: 'Logotype',
							children: [
								(0, t.jsxs)('g', {
									children: [
										(0, t.jsx)('path', {
											className: (0, _.Z)(m().cls_1),
											d: 'm300.52,86.82c0,6.64-.94,13.05-2.83,19.24-1.89,6.19-4.77,11.77-8.64,16.75-3.87,4.98-8.85,8.92-14.94,11.82-6.09,2.9-13.17,4.35-21.24,4.35-6.51,0-11.64-.68-15.38-2.05-3.74-1.37-7.47-3.19-11.18-5.47v50.98h-35.16V37.79h35.16v8.98c3.52-3.06,7.41-5.62,11.67-7.67,4.26-2.05,10.04-3.08,17.33-3.08s14.32,1.79,21.29,5.37c6.97,3.58,12.7,9.16,17.19,16.75,4.49,7.58,6.74,17.14,6.74,28.66Zm-37.01.78c0-5.99-.94-10.85-2.83-14.6-1.89-3.74-4.33-6.45-7.32-8.11-3-1.66-6.09-2.49-9.28-2.49-4.17,0-7.58.67-10.25,2-2.67,1.33-5.18,3.01-7.52,5.03v37.99c1.24.65,2.55,1.38,3.96,2.2,1.4.81,2.8,1.51,4.2,2.1,1.4.59,2.9,1.07,4.49,1.46,1.59.39,3.3.59,5.13.59,5.53,0,10.16-2.34,13.87-7.03s5.57-11.07,5.57-19.14Z',
										}),
										(0, t.jsx)('path', {
											className: (0, _.Z)(m().cls_1),
											d: 'm421.91,132.23c-5.14,2.02-9.9,3.65-14.26,4.88-4.36,1.24-9.6,1.86-15.72,1.86-5.79,0-9.83-1.03-12.11-3.08-2.28-2.05-3.91-4.54-4.88-7.47-3.78,3.06-7.98,5.58-12.6,7.57-4.62,1.99-10.68,2.98-18.16,2.98s-13.07-1.25-17.53-3.76c-4.46-2.51-7.58-5.66-9.38-9.47-1.79-3.81-2.69-7.73-2.69-11.77,0-6.12,1.55-11.18,4.64-15.19,3.09-4,7.24-7.28,12.45-9.81,5.21-2.54,12.11-5.18,20.7-7.91,4.88-1.56,8.58-2.75,11.08-3.56,2.51-.81,4.38-1.45,5.62-1.9,1.24-.45,2.54-1.04,3.91-1.76,0-4.82-.98-8.59-2.93-11.33s-6.19-4.1-12.7-4.1c-7.68,0-14.81,1.69-21.39,5.08-6.58,3.39-12.6,7.75-18.07,13.09v-26.95c4.36-3.12,9.08-5.68,14.16-7.67,5.08-1.99,10.38-3.47,15.92-4.44,5.53-.98,11.13-1.46,16.8-1.46,14.39,0,25.21,2.78,32.47,8.35,7.26,5.57,10.89,13.23,10.89,23v38.38c0,3.65.34,6.36,1.03,8.15.68,1.79,1.94,2.69,3.76,2.69,2.21,0,5.21-.94,8.98-2.83v18.46Zm-48.93-19.04v-23.54c-8.33,3.39-14.42,6.43-18.26,9.13-3.84,2.7-5.76,6.36-5.76,10.99,0,3.32.96,5.86,2.88,7.62,1.92,1.76,4.15,2.64,6.69,2.64,2.41,0,4.8-.67,7.18-2,2.38-1.33,4.8-2.94,7.28-4.83Z',
										}),
										(0, t.jsx)('path', {
											className: (0, _.Z)(m().cls_1),
											d: 'm539.48,37.79l-67.58,144.63h-35.55l27.34-58.2-39.35-86.43h37.79l20.21,49.41,22.95-49.41h34.18Z',
										}),
										(0, t.jsx)('path', {
											className: (0, _.Z)(m().cls_1),
											d: 'm659.31,87.4c0,9.9-2.15,18.72-6.45,26.46-4.3,7.75-10.73,13.87-19.29,18.36-8.56,4.49-18.99,6.74-31.3,6.74s-22.74-2.25-31.3-6.74c-8.56-4.49-14.97-10.61-19.24-18.36-4.26-7.75-6.4-16.57-6.4-26.46,0-7.49,1.19-14.29,3.56-20.41,2.38-6.12,5.99-11.54,10.84-16.26,4.85-4.72,10.82-8.35,17.92-10.89,7.1-2.54,15.3-3.81,24.61-3.81s17.66,1.29,24.85,3.86c7.19,2.57,13.15,6.17,17.87,10.79,4.72,4.62,8.28,10.03,10.69,16.21,2.41,6.19,3.61,13.02,3.61,20.51Zm-37.01,0c0-7.88-1.71-14.05-5.13-18.51-3.42-4.46-8.38-6.69-14.89-6.69s-11.38,2.23-14.79,6.69c-3.42,4.46-5.13,10.63-5.13,18.51s1.72,14,5.18,18.55c3.45,4.56,8.37,6.84,14.75,6.84s11.47-2.26,14.89-6.79c3.42-4.52,5.13-10.73,5.13-18.6Z',
										}),
										(0, t.jsx)('path', {
											className: (0, _.Z)(m().cls_1),
											d: 'm744.17,27.05c-5.34-1.24-9.67-1.86-12.99-1.86-3.78,0-6.72,1.24-8.84,3.71-2.12,2.48-3.17,5.99-3.17,10.55v3.52h17.77v23.83h-17.77v70.41h-35.25v-70.41h-16.21v-23.83h16.21v-1.76c0-6.97,1.35-13.56,4.05-19.78,2.7-6.22,7.21-11.34,13.53-15.38,6.31-4.04,14.65-6.05,25-6.05,5.86,0,11.75.62,17.68,1.86v25.2Z',
										}),
										(0, t.jsx)('path', {
											className: (0, _.Z)(m().cls_1),
											d: 'm823.76,27.05c-5.34-1.24-9.67-1.86-12.99-1.86-3.78,0-6.72,1.24-8.84,3.71-2.12,2.48-3.17,5.99-3.17,10.55v3.52h17.77v23.83h-17.77v70.41h-35.25v-70.41h-16.21v-23.83h16.21v-1.76c0-6.97,1.35-13.56,4.05-19.78,2.7-6.22,7.21-11.34,13.53-15.38,6.31-4.04,14.65-6.05,25-6.05,5.86,0,11.75.62,17.68,1.86v25.2Z',
										}),
									],
								}),
								(0, t.jsxs)('g', {
									id: 'Logotype2',
									children: [
										(0, t.jsx)('polygon', {
											className: (0, _.Z)(m().cls_1),
											points:
												'0 90.29 0 191.44 41.33 172.94 41.33 72.97 0 90.29',
										}),
										(0, t.jsx)('polygon', {
											className: (0, _.Z)(m().cls_1),
											points:
												'48.8 137.13 73.8 162.12 136.97 103.28 41.33 14.72 6.3 30.07 82.06 105.84 48.8 137.13',
										}),
									],
								}),
							],
						}),
					}),
				})
			}
			var x = i(2154),
				u = i.n(x)
			function f(e) {
				let { name: s, marginLeft: i, marginRight: n } = e
				return (0, t.jsx)('div', {
					className: (0, _.Z)('no-select', u().pretitle),
					style: { marginLeft: i, marginRight: n },
					children: s,
				})
			}
			var p = i(1515),
				g = i(5734),
				h = i.n(g)
			function j(e) {
				let {} = e
				return (0, t.jsx)('section', {
					className: (0, _.Z)(h().main__section),
					children: (0, t.jsxs)('div', {
						className: (0, _.Z)('container'),
						children: [
							(0, t.jsx)(v, {}),
							(0, t.jsxs)('div', {
								className: (0, _.Z)(
									'section__container --row',
									h().main__section__wrapper
								),
								children: [
									(0, t.jsxs)('div', {
										className: (0, _.Z)('section__container--left'),
										children: [
											(0, t.jsxs)('div', {
												className: (0, _.Z)('d-flex'),
												children: [
													(0, t.jsx)(f, {
														name: 'Быстро',
														marginRight: '1rem',
													}),
													(0, t.jsx)(f, { name: 'Выгодно' }),
												],
											}),
											(0, t.jsx)('h1', {
												className: (0, _.Z)(h().main__section__title),
												children: 'Оплата зарубежных сервисов',
											}),
											(0, t.jsxs)('ul', {
												className: (0, _.Z)(h().main__section__advantages),
												children: [
													(0, t.jsx)(l, { text: 'Легко и быстро' }),
													(0, t.jsx)(l, { text: 'Большой спектр сервисов' }),
													(0, t.jsx)(l, { text: 'Живая и быстрая поддержка' }),
													(0, t.jsx)(l, { text: 'Минимальная комиссия' }),
													(0, t.jsx)(l, { text: 'Гарантия возврата средств' }),
												],
											}),
											(0, t.jsx)('div', {
												className: h().main__section__button,
												children: (0, t.jsx)(p.Z, { text: 'Оплатить сервис' }),
											}),
										],
									}),
									(0, t.jsx)('div', {
										className: (0, _.Z)('section__container--right'),
										children: (0, t.jsx)('div', { className: h().box }),
									}),
								],
							}),
						],
					}),
				})
			}
		},
		8466: function (e, s, i) {
			'use strict'
			i.d(s, {
				default: function () {
					return d
				},
			})
			var t = i(7437),
				_ = i(4839),
				n = i(2265)
			i(3034), i(4885), i(7322)
			var c = i(6341),
				r = i(3267),
				a = i(3734),
				o = i(2296),
				l = i.n(o)
			function d(e) {
				let {} = e,
					s = (0, n.useRef)(null),
					i = (0, n.useRef)(null)
				return (0, t.jsx)('section', {
					className: (0, _.Z)(l().reviews__section),
					children: (0, t.jsxs)('div', {
						className: (0, _.Z)('container'),
						children: [
							(0, t.jsx)(a.Z, { title: 'Отзывы наших клиентов' }),
							(0, t.jsx)('div', {
								className: (0, _.Z)(l().reviews__section__wrapper),
								children: (0, t.jsxs)(r.tq, {
									spaceBetween: 30,
									centeredSlides: !0,
									slidesPerView: 3,
									speed: 1e3,
									autoplay: { delay: 2500, disableOnInteraction: !1 },
									loop: !0,
									pagination: { clickable: !0 },
									navigation: !0,
									modules: [c.pt, c.W_],
									onAutoplayTimeLeft: (e, t, _) => {
										let n = s.current,
											c = i.current
										n &&
											c &&
											(n.style.setProperty('--progress', (1 - _).toString()),
											(c.textContent = ''.concat(Math.ceil(t / 500), 's')))
									},
									className: (0, _.Z)('mySwiper'),
									children: [
										[
											{ id: 1, image: 'reviews-1' },
											{ id: 2, image: 'reviews-2' },
											{ id: 3, image: 'reviews-3' },
											{ id: 4, image: 'reviews-4' },
											{ id: 5, image: 'reviews-5' },
											{ id: 6, image: 'reviews-6' },
											{ id: 7, image: 'reviews-7' },
											{ id: 8, image: 'reviews-8' },
											{ id: 9, image: 'reviews-9' },
											{ id: 10, image: 'reviews-10' },
										].map(e =>
											(0, t.jsx)(r.o5, {
												children: (0, t.jsx)('div', {
													className: (0, _.Z)(
														e.image,
														l().reviews__section__img
													),
												}),
											})
										),
										(0, t.jsxs)('div', {
											className: (0, _.Z)('autoplay-progress'),
											slot: 'container-end',
											children: [
												(0, t.jsx)('svg', {
													viewBox: '0 0 48 48',
													ref: s,
													children: (0, t.jsx)('circle', {
														cx: '24',
														cy: '24',
														r: '20',
													}),
												}),
												(0, t.jsx)('span', { ref: i }),
											],
										}),
									],
								}),
							}),
						],
					}),
				})
			}
		},
		6239: function (e, s, i) {
			'use strict'
			i.d(s, {
				default: function () {
					return a
				},
			})
			var t = i(7437),
				_ = i(4839),
				n = i(3734),
				c = i(4781),
				r = i.n(c)
			function a(e) {
				let {} = e
				return (0, t.jsxs)('div', {
					className: (0, _.Z)('section', r().services__section),
					children: [
						(0, t.jsx)('div', {
							className: (0, _.Z)('container'),
							children: (0, t.jsx)(n.Z, {
								title: 'Сервисы, которые оплачиваем',
								color: 'white',
								subtitle: '*И это лишь малая часть того, что мы можем оплатить',
							}),
						}),
						(0, t.jsxs)('div', {
							className: (0, _.Z)(r().services__section__grid),
							children: [
								(0, t.jsx)('div', {
									className: (0, _.Z)(r().services__section__grid__item),
								}),
								(0, t.jsx)('div', {
									className: (0, _.Z)(r().services__section__grid__item),
								}),
								(0, t.jsx)('div', {
									className: (0, _.Z)(r().services__section__grid__item),
								}),
								(0, t.jsx)('div', {
									className: (0, _.Z)(r().services__section__grid__item),
								}),
								(0, t.jsx)('div', {
									className: (0, _.Z)(r().services__section__grid__item),
								}),
								(0, t.jsx)('div', {
									className: (0, _.Z)(r().services__section__grid__item),
								}),
								(0, t.jsx)('div', {
									className: (0, _.Z)(r().services__section__grid__item),
								}),
								(0, t.jsx)('div', {
									className: (0, _.Z)(r().services__section__grid__item),
								}),
								(0, t.jsx)('div', {
									className: (0, _.Z)(r().services__section__grid__item),
								}),
								(0, t.jsx)('div', {
									className: (0, _.Z)(r().services__section__grid__item),
								}),
								(0, t.jsx)('div', {
									className: (0, _.Z)(r().services__section__grid__item),
								}),
								(0, t.jsx)('div', {
									className: (0, _.Z)(r().services__section__grid__item),
								}),
								(0, t.jsx)('div', {
									className: (0, _.Z)(r().services__section__grid__item),
								}),
								(0, t.jsx)('div', {
									className: (0, _.Z)(r().services__section__grid__item),
								}),
								(0, t.jsx)('div', {
									className: (0, _.Z)(r().services__section__grid__item),
								}),
								(0, t.jsx)('div', {
									className: (0, _.Z)(r().services__section__grid__item),
								}),
							],
						}),
					],
				})
			}
		},
		5989: function (e, s, i) {
			'use strict'
			i.d(s, {
				default: function () {
					return d
				},
			})
			var t = i(7437),
				_ = i(4839),
				n = i(3734),
				c = i(7373),
				r = i.n(c)
			function a(e) {
				let { title: s, description: i, order: n } = e
				return (0, t.jsxs)('div', {
					className: (0, _.Z)(r().work_step__item),
					children: [
						(0, t.jsxs)('div', {
							className: (0, _.Z)(r().work_step__item__wrapper),
							children: [
								(0, t.jsx)('span', { children: s }),
								(0, t.jsx)('p', { children: i }),
							],
						}),
						(0, t.jsx)('div', {
							className: (0, _.Z)('no-select', r().work_step__item__bg),
							children: n,
						}),
					],
				})
			}
			var o = i(2726),
				l = i.n(o)
			function d(e) {
				let {} = e
				return (0, t.jsx)('section', {
					className: (0, _.Z)('section', l().work_steps__section),
					children: (0, t.jsxs)('div', {
						className: (0, _.Z)('container'),
						children: [
							(0, t.jsx)(n.Z, { title: 'Как оплатить?' }),
							(0, t.jsxs)('div', {
								className: (0, _.Z)(l().work_steps__section__items),
								children: [
									(0, t.jsx)(a, {
										order: '1',
										title: 'Связь с оператором',
										description:
											'Вы пишите в наш Telegram-аккаунт, где оператор уточнит все детали необходимого платежа, и поможет выбрать оптимальный вариант.',
									}),
									(0, t.jsx)(a, {
										order: '2',
										title: 'Считаем комиссию',
										description:
											'После выбора оптимального способа платежа оператор сообщит стоимость сервиса и расскажет, какие есть варианты перевода средств.',
									}),
									(0, t.jsx)(a, {
										order: '3',
										title: 'Авансовый платеж',
										description:
											'При переводе по СБП или по номеру карты оператор сообщит реквизиты. А при оплате картой оператор сделает вам ссылку на онлайн-оплату и сформирует чек.',
									}),
									(0, t.jsx)(a, {
										order: '4',
										title: 'Оплата сервиса',
										description:
											'После поступления средств к нам, мы вышлем вам данные, которые вы сможете ввести в ваш аккаунт, чтобы оплата прошла успешно.',
									}),
									(0, t.jsx)(a, {
										order: '5',
										title: 'Отчетные документы',
										description:
											'После проведения оплаты, если вы переводили нам средства по безналичному расчету, мы согласуем с вами обмен закрывающими документами через ЭДО.',
									}),
								],
							}),
						],
					}),
				})
			}
		},
		1990: function (e) {
			e.exports = { advantage: 'Advantage_advantage__ylfZq' }
		},
		5202: function (e) {
			e.exports = { edge__item: 'Edge_edge__item__0bIst' }
		},
		5848: function (e) {
			e.exports = {
				faq__item: 'FAQItem_faq__item__2DfOx',
				faq__item__header: 'FAQItem_faq__item__header__5aUGh',
				faq__item__subtitle: 'FAQItem_faq__item__subtitle__RcC6u',
				faq__item__title: 'FAQItem_faq__item__title__OCsxT',
				faq__item__wrapper: 'FAQItem_faq__item__wrapper__UFGAA',
				faq__item__answer: 'FAQItem_faq__item__answer__wiP4S',
			}
		},
		1876: function (e) {
			e.exports = {
				check: 'Check_check__ywFfV',
				check__path: 'Check_check__path__k4e_e',
			}
		},
		6961: function (e) {
			e.exports = {
				telegram: 'Telegram_telegram__lgyCt',
				telegram__path: 'Telegram_telegram__path__ZfiCy',
			}
		},
		7566: function (e) {
			e.exports = {
				logo: 'Logo_logo__Xw2ZB',
				cls_1: 'Logo_cls_1__YT0oF',
				cls_2: 'Logo_cls_2__yvqmD',
			}
		},
		2154: function (e) {
			e.exports = { pretitle: 'PreTitle_pretitle__TkgZ1' }
		},
		9516: function (e) {
			e.exports = { section__title: 'SectionTitle_section__title__FIJEb' }
		},
		3407: function (e) {
			e.exports = {
				telegram_button: 'TGButton_telegram_button__FvH7D',
				plain: 'TGButton_plain__z6WYw',
			}
		},
		7373: function (e) {
			e.exports = {
				work_step__item: 'WorkStepItem_work_step__item__AfEPD',
				work_step__item__wrapper:
					'WorkStepItem_work_step__item__wrapper__B8SGr',
				work_step__item__bg: 'WorkStepItem_work_step__item__bg__UERuo',
			}
		},
		4588: function (e) {
			e.exports = { button_fixed: 'ButtonFixed_button_fixed__zXK1z' }
		},
		1404: function (e) {
			e.exports = {
				advantages__section: 'Edges_advantages__section__ReZdM',
				advantages__section__items: 'Edges_advantages__section__items__bUMX_',
			}
		},
		8306: function (e) {
			e.exports = {
				faq__section: 'FAQ_faq__section__7tGL5',
				faq__section__items: 'FAQ_faq__section__items__PbKEP',
			}
		},
		9349: function (e) {
			e.exports = {
				footer__section: 'Footer_footer__section__7TSpH',
				footer__section__wrapper: 'Footer_footer__section__wrapper__i1MEC',
				footer__section__title: 'Footer_footer__section__title__ROJN_',
				footer__section__copyright: 'Footer_footer__section__copyright__tjA5d',
			}
		},
		5734: function (e) {
			e.exports = {
				main__section: 'MainSection_main__section__mL8Ae',
				main__section__wrapper: 'MainSection_main__section__wrapper__Rg3kp',
				main__section__title: 'MainSection_main__section__title__gGpk5',
				main__section__advantages:
					'MainSection_main__section__advantages__664Bw',
				main__section__button: 'MainSection_main__section__button__Wg33O',
				box: 'MainSection_box__WEfS8',
				sec_icon: 'MainSection_sec_icon__tQLEf',
				sec_icon__item: 'MainSection_sec_icon__item__rYuef',
				levitateUp: 'MainSection_levitateUp__3W6UI',
				levitateDown: 'MainSection_levitateDown__AUzAy',
			}
		},
		2296: function (e) {
			e.exports = {
				reviews__section: 'Reviews_reviews__section__41WTc',
				reviews__section__wrapper: 'Reviews_reviews__section__wrapper__Xtdtg',
				reviews__section__img: 'Reviews_reviews__section__img__CE7W3',
			}
		},
		4781: function (e) {
			e.exports = {
				services__section: 'Services_services__section__vCoLP',
				services__section__grid: 'Services_services__section__grid__E0yDQ',
				services__section__grid__item:
					'Services_services__section__grid__item__sBqUi',
			}
		},
		2726: function (e) {
			e.exports = {
				work_steps__section__items:
					'WorkSteps_work_steps__section__items__vMIXD',
			}
		},
	},
	function (e) {
		e.O(0, [363, 351, 971, 23, 744], function () {
			return e((e.s = 563))
		}),
			(_N_E = e.O())
	},
])
