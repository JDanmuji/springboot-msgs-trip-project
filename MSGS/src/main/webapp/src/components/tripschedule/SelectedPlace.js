import React from 'react'
import style from './SelectedPlace.module.css'

export default function SelectedPlace({ order }) {
	return (
		<div style={{ display: 'flex' , width: 'fit-content', height: 'fit-content'}}>
			{order !== 1 && (
				<div className={style['arrow-icon-wrapper']}>
					<img src='public/images/icon_arrow_right_blue.png' alt='arrow_png' className={style['arrow-icon']} />
				</div>
			)}

			<div className={style['selected-place']}>
				<div className={style['order-text']}>{order}</div>
				<div className={style['place-image-wrapper']}>
					<img
						src='https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/c9251305-e985-430c-962f-ccc925dc9ed7.jpeg'
						className={style['place-image']}
						alt='image1'
					/>
					<img src='public/images/ic-favorite-empty-white.svg' className={style['bookmark-image']} alt='bookmark' />
				</div>
				<div className={style['text-area']}>
					<div className={style['place-title']}>산타 모니카 비치</div>

					<div className={style['text3-svg-wrapper']}>
						<div className={style['text-3']}>관광명소 · 로스앤젤레스</div>

						<div className={style['rating-bookmark-wrapper']}>
							<div className={style['rating-svg-text']}>
								<img src='public/images/ic-yellow-star.svg' alt='yellow-star' />
								<span>4.3</span>
								<span style={{ marginRight: '0.4rem' }}>(198)</span>
							</div>
							<div className={style['bookmark-svg-text']}>
								<img
									src='public/images/ic-pink-heart.svg'
									alt='pink-heart'
									style={{ margin: '0.1rem 0.2rem 0 0.2rem' }}
								/>
								<span>8,059</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
