import React from 'react'
import style from './SelectedPlace.module.css'

export default function SelectedPlace({ order, item, selectedDay }) {
	return (
		<div style={{ display: 'flex', width: 'fit-content', height: 'fit-content' }}>
			{order !== 1 && (
				<div className={style['arrow-icon-wrapper']}>
					<img src={process.env.PUBLIC_URL + '/images/icon_arrow_right_blue.png'} alt='arrow_png' className={style['arrow-icon']} />
				</div>
			)}

			<div className={style['selected-place']}>
				<div className={style['order-text']}>{order}</div>
				<div className={style['place-image-wrapper']}>
					<img src={item?.firstimage2} className={style['place-image']} alt='image1' />
					{/* <img src={process.env.PUBLIC_URL + '/images/ic-favorite-empty-white.svg'} className={style['bookmark-image']} alt='bookmark' /> */}
				</div>
				<div className={style['text-area']}>
					{/* <div className={style['place-title']}>{item?.title}</div> */}
					<div className={style[ 'place-title' ]}>
						{item?.title.length < 10 ? item?.title : item?.title.slice(0, 10) + '..'}
					</div>

					<div className={style['text3-svg-wrapper']}>
						<div className={style['text-3']}>
							{item?.type}·{item?.location}
						</div>

						<div className={style['rating-bookmark-wrapper']}>
							<div className={style['rating-svg-text']}>
								<img src={process.env.PUBLIC_URL + '/images/ic-yellow-star.svg'} alt='yellow-star' />
								<span>{(Math.random() * 4 + 1).toFixed(1)}</span> {/*4.3 */}
								<span style={{ marginRight: '0.4rem' }}>({Math.floor(Math.random() * 300)})</span> {/*198 */}
							</div>
							<div className={style['bookmark-svg-text']}>
								<img src={process.env.PUBLIC_URL + '/images/ic-pink-heart.svg'} alt='pink-heart' style={{ margin: '0.1rem 0.2rem 0 0.2rem' }} />
								<span>{Math.floor(Math.random() * 1000)}</span> {/**8,059 */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
