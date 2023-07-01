import React, { useEffect, useRef, useState } from 'react';

import style from './SelectedPlaceList.module.css'
import SelectedPlace from '../../components/tripschedule/SelectedPlace'

export default function SelectedPlaceList({ planList, selectedDay, setSelectedDay }) {
   /*선택한 장소들 영역 스크롤 기능*/
   const [scrollPosition, setScrollPosition] = useState(0) // 현재 스크롤 위치
   const containerRef = useRef(null) // React 컴포넌트에서 DOM 요소에 접근하기 위해 사용

   const [showPrevButton, setShowPrevButton] = useState(false) // slide 왼쪽 이동 버튼 show
   const [showNextButton, setShowNextButton] = useState(false) // slide 오른쪽 이동 버튼 show

   // 선택된 장소들 개수에 따라 오른쪽 슬라이드 버튼 show 위함. 필요없을 수 있으니 다시 볼 것!!!
   useEffect(() => {
      if (planList && planList[selectedDay]?.filter((item) => item.type !== 'memo').length > 4) {
         setShowNextButton(true)
      }
   }, [planList])

   /*왼쪽 슬라이드 버튼 */
   const prevBtnHandler = () => {
      const container = containerRef.current
      if (container) {
         const scrollOffset = 2000 // 클릭 당 스크롤 이동 범위
         container.scrollTo({
            // 컨테이너 스크롤
            left: scrollPosition - scrollOffset, // 현재 위치 - 클릭 당 스크롤 이동 범위
            behavior: 'smooth',
         })
         setScrollPosition(scrollPosition - scrollOffset) // state 업데이트
      }
   }
   /*오른쪽 슬라이드 버튼 */
   const nextBtnHandler = () => {
      const container = containerRef.current
      if (container) {
         const scrollOffset = 2000
         container.scrollTo({
            left: scrollPosition + scrollOffset,
            behavior: 'smooth',
         })
         setScrollPosition(scrollPosition + scrollOffset)
         setShowPrevButton(true)
      }
   }

   return (
      <div className={style['selected-place']}>
         <div className={style['day-wrapper']}>
            {planList && Object.keys(planList).map((item) => (
               <button
                  key={item}
                  className={`${style['day-button']} ${item == selectedDay ? style['day-button-selected'] : null}`}
                  onClick={() => {
                     setSelectedDay(item)
                  }}>
                  DAY {item}
               </button>
            ))}
         </div>

         <div className={style['selected-item-container']}>
            <div className={style['slide-prev-btn-wrapper']} onClick={prevBtnHandler}>
               {showPrevButton && (
                  <img
                     src={process.env.PUBLIC_URL + '/images/icon_arrow_left_orange.png'}
                     alt='arrow_orange'
                     className={style['slide-btn']}
                  />
               )}
            </div>
            <div className={style['selected-item-wrapper']} ref={containerRef}>
               {planList && planList[selectedDay]
                  ?.filter((item) => item.type !== 'memo')
                  .map((item, index) => (
                     <SelectedPlace key={index + 1} order={index + 1} item={item} />
                  ))}
            </div>
            {showNextButton && (
               <div className={style['slide-next-btn-wrapper']} onClick={nextBtnHandler}>
                  <img
                     src={process.env.PUBLIC_URL + '/images/icon_arrow_right_orange.png'}
                     alt='arrow_orange'
                     className={style['slide-btn']}
                  />
               </div>
            )}
         </div>
      </div>
   )
}