const TripScheduleData = [
    { order: 1, placeOrder: 1, type: 'place', title: '경포 해변', subtitle: '관광명소 · 강릉', center: {lat: 37.805214, lng: 128.908346}, },
    { order: 2, placeOrder: 2, type: 'place', title: '강문 해변', subtitle: '관광명소 · 강릉', center: {lat: 37.796452, lng: 128.917690}, },
    { order: 3, placeOrder: null, type: 'dorm', title: '코랄도 바이 조선', subtitle: '숙소 · 강릉', center: {lat: 37.966109, lng: 128.759825}, },
    { order: 4, placeOrder: null, type: 'memo', title: '중간에 야시장 갈 수 있음', subtitle: null },
    {
        order: 5,
        placeOrder: 3,
        type: 'place',
        title: '에디슨 과학 박물관 & 참소리 축음기',
        subtitle: '관광명소 · 강릉',
        center: {
        lat: 37.797028,
        lng: 128.897320}
        ,
    },

];

/*
강원도: 37.8524 128.2127
서울특별시: 37.554862 126.995409
경기도: 37.4134 127.5188
인천광역시: 37.4559 126.7053
*/

export default TripScheduleData;