﻿

import { SITE_CONFIG } from '../../../utils/baseConfig';

export default {
  auth: {
    loginTitle: '로그인',
    loginSubtitle: '계속하려면 자격 증명을 입력하세요',
    registerTitle: '계정 생성',
    registerSubtitle: '아래 정보를 입력하여 새 계정을 등록하세요',
    forgotPasswordTitle: '비밀번호 찾기',
    forgotPasswordSubtitle: '이메일로 인증 코드를 보내드립니다',
    resetPasswordTitle: '비밀번호 재설정',
    resetPasswordSubtitle: '새 비밀번호를 설정하세요',
    noAccount: '계정이 없으신가요?',
    hasAccount: '이미 계정이 있으신가요?',
    alreadyHaveAccount: '이미 계정이 있으신가요?',
    rememberPassword: '비밀번호를 기억하시겠습니까?',
    createAccount: '계정 생성',
    loginNow: '지금 로그인',
    resetNow: '비밀번호 재설정',
    alreadyLoggedIn: '이미 로그인하셨습니다. 대시보드로 이동 중입니다',
    emailRequired: '이메일을 입력하세요',
    emailInvalid: '유효한 이메일 주소를 입력하세요',
    passwordRequired: '비밀번호를 입력하세요',
    confirmPasswordRequired: '비밀번호를 확인하세요',
    passwordTooShort: '비밀번호는 최소 8자 이상이어야 합니다',
    passwordsDoNotMatch: '입력한 비밀번호가 일치하지 않습니다',
    loginSuccess: '로그인 성공',
    loginFailed: '로그인 실패, 자격 증명을 확인하세요',
    registerSuccess: '등록 성공',
    registerFailed: '등록 실패, 나중에 다시 시도하세요',
    resetSuccess: '재설정 링크를 이메일로 보냈습니다',
    resetFailed: '비밀번호 재설정 실패, 나중에 다시 시도하세요',
    logoutSuccess: '로그아웃 성공',
    logoutFailed: '로그아웃 실패',
    newPassword: '새 비밀번호',
    confirmPassword: '비밀번호 확인',
    codeRequired: '인증 코드를 입력하세요',
    codeInvalid: '인증 코드가 유효하지 않습니다',
    codeSent: '인증 코드가 전송되었습니다',
    checkSpam: '장시간 이메일을 받지 못한 경우 스팸 메일함을 확인하세요',
    sendCodeFailed: '인증 코드 전송 실패',
    popup: {
      close_btn: '이해했습니다',
      wait_close_btn: '{seconds}초 기다려주세요'
    },
    passwordResetSuccess: '비밀번호 재설정 성공',
    passwordResetFailed: '비밀번호 재설정 실패, 나중에 다시 시도하세요',
    inviteCode: '초대 코드',
    inviteCodePlaceholder: '초대 코드를 입력하세요',
    inviteCodeRequired: '초대 코드는 비워둘 수 없습니다',
    agreeToTerms: '읽었으며 동의합니다',
    termsOfService: '서비스 약관',
    mustAgreeToTerms: '등록하려면 서비스 약관에 동의해야 합니다',
    emailPlaceholder: '이메일 주소를 입력하세요',
    emailPrefixPlaceholder: '이메일 접두사를 입력하세요',
    codePlaceholder: '인증 코드를 입력하세요',
    newPasswordPlaceholder: '새 비밀번호를 입력하세요',
    confirmPasswordPlaceholder: '새 비밀번호를 다시 입력하세요',
    passwordPlaceholder: '비밀번호를 입력하세요',
    requiresAuth: '로그인이 필요합니다',
    domainNotAuthorized: '도메인이 인증되지 않았습니다',
    contactAdmin: '관리자에게 연락하여 인증을 받으세요',
    captcha: 'CAPTCHA 인증',
    captchaRequired: 'CAPTCHA 인증을 완료하세요',
    verifyTokenSuccess: '토큰 인증 성공',
    verifyTokenFailed: '토큰 인증 실패, 다시 시도하세요'
  },
  validation: {
    required: '{field}은(는) 비워둘 수 없습니다',
    email: '유효한 이메일 주소를 입력하세요',
    minLength: '{field}의 길이는 최소 {length}자 이상이어야 합니다',
    maxLength: '{field}의 길이는 {length}자를 초과할 수 없습니다',
    passwordMatch: '입력한 비밀번호가 일치하지 않습니다',
    emailRequired: '이메일 주소를 입력하세요',
    emailInvalid: '유효한 이메일 주소를 입력하세요',
    passwordRequired: '비밀번호를 입력하세요',
    confirmPasswordRequired: '비밀번호를 확인하세요',
    passwordsDontMatch: '입력한 비밀번호가 일치하지 않습니다',
    codeRequired: '인증 코드를 입력하세요'
  },
  errors: {
    networkError: '네트워크 오류, 연결을 확인하세요',
    serverError: '서버 오류, 나중에 다시 시도하세요',
    unauthorized: '인증되지 않음, 로그인하세요',
    forbidden: '접근 금지, 권한이 부족합니다',
    notFound: '페이지를 찾을 수 없습니다',
    notFoundDescription: '죄송합니다, 방문하신 페이지는 존재하지 않거나 삭제되었습니다',
    backToHome: '홈으로 돌아가기',
    unknown: '알 수 없는 오류가 발생했습니다',
    browserRestricted: '브라우저 접근이 제한되었습니다'
  },
  messages: {
    loginSuccess: '로그인 성공',
    loginFailed: '로그인 실패, 자격 증명을 확인하세요',
    registerSuccess: '등록 성공',
    registerFailed: '등록 실패, 나중에 다시 시도하세요',
    passwordResetSuccess: '비밀번호 재설정 성공',
    passwordResetFailed: '비밀번호 재설정 실패, 나중에 다시 시도하세요',
    logoutSuccess: '로그아웃 성공',
    codeSent: '인증 코드가 전송되었습니다',
    sendCodeFailed: '인증 코드 전송 실패',
    configLoadFailed: '구성 로드 실패, 페이지를 새로고침하세요'
  },
  browserRestricted: {
    title: '브라우저 접근 제한',
    subtitle: '현재 브라우저는 지원되지 않습니다',
    description: '최적의 브라우징 경험과 보안을 보장하기 위해 이 웹사이트는 현재 사용 중인 브라우저를 지원하지 않습니다.',
    recommendText: '아래 추천 브라우저를 사용하여 접속하세요:',
    currentBrowser: '현재 사용 중인 브라우저:',
    currentUrl: '로그인 URL:',
    downloadChrome: 'Chrome 브라우저 다운로드',
    downloadEdge: 'Edge 브라우저 다운로드',
    downloadSafari: 'Safari 브라우저 다운로드',
    openWithRecommended: '추천 브라우저로 현재 페이지 열기',
    whyRestricted: '일부 브라우저가 제한되는 이유는 무엇인가요?',
    whyRestrictedDesc: '일부 브라우저는 보안 문제가 있거나 필요한 기능을 지원하지 않을 수 있습니다. 이러한 브라우저를 제한하여 계정 보안과 더 나은 사용자 경험을 보장합니다.',
    supportedBrowsersTitle: '지원되는 브라우저 목록',
    browserNames: {
      Chrome: 'Chrome 브라우저',
      Edge: 'Edge 브라우저',
      Firefox: 'Firefox 브라우저',
      Safari: 'Safari 브라우저',
      Opera: 'Opera 브라우저',
      UC: 'UC 브라우저',
      Maxthon: 'Maxthon 브라우저',
      Unknown: '알 수 없는 브라우저'
    }
  },
  landing: {
    mainText: SITE_CONFIG.landingText['ko-KR'] || '글로벌 네트워크의 무한한 가능성을 탐험하세요',
    scrollText: '아래로 스크롤하여 로그인',
    exploreButton: '탐험 시작'
  },
  contextMenu: {
    refresh: '페이지 새로고침',
    back: '이전 페이지로 돌아가기',
    forward: '다음 페이지로 이동',
    copy: '복사',
    paste: '붙여넣기'
  },
  service: {
    title: '온라인 지원',
    description: '지원 팀과 실시간으로 채팅하세요',
    loading: '지원 시스템 로드 중...',
    waitForIcon: '잠시 기다리시면 채팅 아이콘이 나타나면 클릭하세요',
    loadError: '지원 시스템 로드 실패',
    retry: '재시도',
    offline: '현재 지원이 오프라인입니다',
    leaveMessage: '메시지 남기기',
    startChat: '채팅 시작',
    back: '뒤로'
  },
  common: {
    appName: SITE_CONFIG.siteName,
    welcome: `${SITE_CONFIG.siteName}에 오신 것을 환영합니다`,
    login: '로그인',
    register: '등록',
    logout: '로그아웃',
    email: '이메일',
    password: '비밀번호',
    confirmPassword: '비밀번호 확인',
    forgotPassword: '비밀번호를 잊으셨나요?',
    resetPassword: '비밀번호 재설정',
    rememberMe: '기억하기',
    submit: '제출',
    cancel: '취소',
    save: '저장',
    back: '뒤로',
    loading: '로드 중...',
    verificationCode: '인증 코드',
    sendCode: '인증 코드 전송',
    verify: '인증',
    enterEmail: '이메일 주소를 입력하세요',
    enterVerificationCode: '인증 코드를 입력하세요',
    enterPassword: '비밀번호를 입력하세요',
    selectEmailDomain: '이메일 도메인 선택',
    toggleTheme: '테마 전환',
    language: '언어',
    optional: '(선택 사항)',
    copied: '클립보드에 복사되었습니다',
    copy: '복사',
    copyFailed: '복사 실패',
    apiChecking: 'API 가용성 확인 중...',
    checking: '확인 중',
    completed: '완료'
  }
};
