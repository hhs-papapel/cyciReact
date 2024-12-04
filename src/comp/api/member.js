import api from '../ax/axiosSetting'


/**
 * 아이디 중복  체크
 * @param {id: 검사 아이디} obj 
 * @returns 
 */
export const memberIdCheck = (obj) => {
    return api.post('/member/findId', JSON.stringify(obj)
    , {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

/**
 * 로그인  체크
 * @param {userId: 검사 아이디, userPw: 검사 패스워드} obj 
 * @returns 
 */
export const memberLoginCheck = (obj) => {
    return api.post('/member/login', JSON.stringify(obj)
    , {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const areaList = () => {
    return api.get('/area/list');
}
