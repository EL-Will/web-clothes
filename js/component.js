const component = {};
import { db, auth } from "./model.js";

component.homePageUnSingin = `
<nav class="row format-row nvabar-frame z3 show-nvabar hidden-nvabar">
        <div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0">
            <div class="row format-row padding-left-48">
                <div class="col-lg-2 col-md-2 col-sm-2 col-2 padding-0">
                    <a href="#banner-img" class="logo-nvabar z3">
                        <svg height="24px" width="24px" fill="#111" viewBox="0 0 26 32">
                            <path
                                d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0">
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0 flex-box-signin-signup">
            <div class="row format-row padding-right-48">
                <div class="col-lg-2 col-md-2 col-sm-2 col-2 padding-0">
                </div>
                <div class="col-lg-10 col-md-10 col-sm-10 col-10 padding-0">
                    <div class="row format-row nav1-hover-account">
                        <div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0 nav1-text-account"></div>
                        <div class="col-lg-8 col-md-8 col-sm-8 col-8 padding-0 nav1-text-account">
                          <a id="sing-up-btn" class="pre-singup-item body-singup mr-singup ml-singup">
                          <span id="id-singup">Sign Up</span>
                          </a>
                          <span class="line-body">|</span>
                          <a class="nva-btn mr-singin ml-singin" id="sing-in-btn">
                          <span id="title-singin-member">Sign In</span>
                          </a>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
</nav>
<header>
        <div class="row format-row padding-top-10 padding-bottom-10 flex-header-1">
            <div class="col-lg-1 col-md-2 col-sm-3 col-3 padding-0 padding-left-48 item1">
                <a href="#banner-img">
                    <img alt="logo"
                        src="//upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/42px-Letter_t.svg.png"
                        decoding="async" width="22" height="60"
                        srcset="//upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/63px-Letter_t.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/84px-Letter_t.svg.png 2x"
                        data-file-width="22" data-file-height="60">
                </a>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-5 col-4 padding-0 empty-header1 item2"></div>
            <div class="col-lg-2 col-md-3 col-sm-2 col-2 padding-0 show-box-gender item3">
                <div class="row format-row">
                    <div class="col-lg-4 col-md-4 col-sm-4 col-4 format-text-header1 box-men">
                        <a id="gotoMenDesktop">Men</a>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-4 format-text-header1 box-women">
                        <a id="gotoWomenDesktop">Women</a>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-4 format-text-header1 box-kids">
                        <a id="gotoKidsDesktop">Kids</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-1 col-md-1 col-sm-1 col-1 padding-0 empty-header2 item4"></div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-5 padding-0 item5">
                <div class="row format-row padding-right-48 item5All">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-6 padding-0 box-input-search item5-1">
                        <input placeholder="Search" type="text" id="inputSearch"
                            class="pre-search-input show-input-search input-search">
                        <button class="pre-clear-search pre-clear-search-hide" id="btnClear">
                            <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                                role="img" width="24px" height="24px" fill="none">
                                <path stroke="currentColor" stroke-width="1.5"
                                    d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="col-lg-6 col-md-3 col-sm-5 col-4 padding-0 empty-header3 item5-2"></div>
                    <div class="col-lg-2 col-md-3 col-sm-4 col-4 padding-0 flex-header-start item5-3">
                        <button class="pre-search-btn pre-search-hover" id="btnSearch">
                            <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                                role="img" width="24px" height="24px" fill="none">
                                <path stroke="currentColor" stroke-width="1.5"
                                    d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-4 col-4 padding-0 flex-header-3 hide-favorite-btn item5-4">
                        <a id="gotoFavouriteDesktop" title="Favourites" class="pre-favorite">
                            <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                                role="img" width="24px" height="24px" fill="none">
                                <path stroke="currentColor" stroke-width="1.5"
                                    d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451">
                                </path>
                            </svg>
                        </a>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-4 col-4 padding-0 flex-header-3 hide-menu-btn item5-6">
                        <button class="pre-expand-option pre-expand-option-hover" title="Mobile Menu" id="expandOption">
                            <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                                role="img" width="24px" height="24px" fill="none">
                                <path stroke="currentColor" stroke-width="1.5" d="M21 5.25H3M21 12H3m18 6.75H3"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-4 col-4 padding-0 flex-header-4 item5-5">
                        <button class="pre-bag-btn pre-bag-hover" id="gotoBagDesktop" title="Bag Items">
                            <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                                role="img" width="24px" height="24px" fill="none">
                                <path stroke="currentColor" stroke-width="1.5"
                                    d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5">
                                </path>
                            </svg>
                            <span class="format-content-bag" id="countTotal"></span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-lg-1 col-md-1 col-sm-1 col-1 padding-right-48 end-text-cancel hide-Cancel item6">
                <button type="submit" class="pre-cancel-btn" id="cancelBtn">
                    Cancel
                </button>
            </div>
            <div class="pre-mobile-menu pre-mobile-hide z10">
                <div class="pre-panel pre-panel-root">
                    <button class="pre-btn-mobile-menu close-nav-btn pre-btn-icon ripple" id="close-expand-mobile">
                        <svg aria-hidden="true" class="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img"
                            width="18px" height="18px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5"
                                d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoMen">
                        <span class="pre-link-label headline-3">Men</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                            focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoWomen">
                        <span class="pre-link-label headline-3">Women</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                            focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoKids">
                        <span class="pre-link-label headline-3">Kids</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                            focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoSigninMobile">
                        <span class="pre-link-label headline-4">Sign In</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoSignupMobile">
                        <span class="pre-link-label headline-4">Sign Up</span>
                    </button>
                </div>
            </div>
            <div class="pre-mobile-menu-men pre-mobile-hide-men z10">
                <div class="pre-panel pre-panel-root">
                    <button class="pre-btn-mobile-menu close-nav-btn pre-btn-icon ripple" id="closeExpandMobileMen">
                        <svg aria-hidden="true" class="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img"
                            width="18px" height="18px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5"
                                d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gobackAllMen">
                        <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b" focusable="false"
                            viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967">
                            </path>
                        </svg>
                        <span class="pre-link-label headline-3 padding-left-12">All</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn">
                        <span class="pre-link-label headline-3">Men</span>
                    </button>
                    <div class="nav-btn pre-link flex-btn"></div>
                    <button class="nav-btn pre-link flex-btn" id="gotoAllMenShoesMobile">
                        <span class="pre-link-label headline-3">Shoes</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b d-lg-h" focusable="false"
                            viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoJordanMenShoesMobile">
                        <span class="pre-link-label headline-4">Jordan</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoRunningMenShoesMobile">
                        <span class="pre-link-label headline-4">Running</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoFootballMenShoesMobile">
                        <span class="pre-link-label headline-4">Football</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoMenClothing">
                        <span class="pre-link-label headline-3">Clothing</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                            focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoMenGear">
                        <span class="pre-link-label headline-3">Grear</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                            focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="pre-mobile-menu-women pre-mobile-hide-women z10">
                <div class="pre-panel pre-panel-root">
                    <button class="pre-btn-mobile-menu close-nav-btn pre-btn-icon ripple" id="closeExpandMobileWomen">
                        <svg aria-hidden="true" class="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img"
                            width="18px" height="18px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5"
                                d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gobackAllWomen">
                        <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b" focusable="false"
                            viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967">
                            </path>
                        </svg>
                        <span class="pre-link-label headline-3 padding-left-12">All</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn">
                        <span class="pre-link-label headline-3">Women</span>
                    </button>
                    <div class="nav-btn pre-link flex-btn"></div>
                    <button class="nav-btn pre-link flex-btn" id="gotoWomenShoes">
                        <span class="pre-link-label headline-3">Shoes</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b d-lg-h" focusable="false"
                            viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoJordanWomenShoes">
                        <span class="pre-link-label headline-4">Jordan</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoRunningWomenShoes">
                        <span class="pre-link-label headline-4">Running</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoFootballWomenShoes">
                        <span class="pre-link-label headline-4">Football</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoWomenClothing">
                        <span class="pre-link-label headline-3">Clothing</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                            focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoWomenGear">
                        <span class="pre-link-label headline-3">Grear</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                            focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="pre-mobile-menu-kids pre-mobile-hide-kids z10">
                <div class="pre-panel pre-panel-root">
                    <button class="pre-btn-mobile-menu close-nav-btn pre-btn-icon ripple" id="closeExpandMobileKids">
                        <svg aria-hidden="true" class="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img"
                            width="18px" height="18px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5"
                                d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gobackAllKids">
                        <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b" focusable="false"
                            viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967">
                            </path>
                        </svg>
                        <span class="pre-link-label headline-3 padding-left-12">All</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn">
                        <span class="pre-link-label headline-3">Kids</span>
                    </button>
                    <div class="nav-btn pre-link flex-btn"></div>
                    <button class="nav-btn pre-link flex-btn" id="gotoKidsShoes">
                        <span class="pre-link-label headline-3">Shoes</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b d-lg-h" focusable="false"
                            viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoJordanKidsShoes">
                        <span class="pre-link-label headline-4">Jordan</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoRunningKidsShoes">
                        <span class="pre-link-label headline-4">Running</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoFootballKidsShoes">
                        <span class="pre-link-label headline-4">Football</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoKidsClothing">
                        <span class="pre-link-label headline-3">Clothing</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                            focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoKidsGear">
                        <span class="pre-link-label headline-3">Grear</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                            focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </header>
<div class="row format-row new-pre-l-search hide-product-search" id="productSearch">
    <div class="col-lg-12 col-md-12 col-sm-12 col-12 padding-0">
        <div class="grid-6-img" id="shoesSearch">

        </div>
    </div>
</div>
<div class="pre-header2 pre-header2-shadow">
</div>
<!-- start content -->
<div class="img-fluid banner-homepage">
<img id="banner-img" class="img-fluid">
</div>
<div class="box-nameType-and-buttonNext">
<h2 class="box-h2">AF1 Highligths</h2>
<div class="nva-button-next">
  <a href="#" class="out-box-text-shop"><span class="box-text-shop">Shop</span></a>
  <button type="button" class="carousel-btn prev-btn" id="prev-btn">
    <div class="icon">
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px"
        fill="none">
        <path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path>
      </svg>
    </div>
  </button>

  <button class="carousel-btn next-btn" id="next-btn">
    <div class="icon">
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px"
        fill="none">
        <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path>
      </svg>
    </div>
  </button>
</div>
</div>
<section class="row grid-img format-row">
    <ul class="slider">
      <div class = "slides" id="product_items">
     
      </div>
    </ul>
  </section>

<div class="grid-infor">
<h2 class="box-h2-new1">The Essentials</h2>
<div class="flex-2-img">
  <div class="video-ess">
    <video autoplay="" loop="" playsinline="" class="resize-img"
      src="https://static.nike.com/a/images/f_mp4/h_700,c_limit/c0f2257a-06bc-444c-9182-349eb57d99e5/nike-just-do-it.gif"></video>
  </div>
  <div class="image-ess">
    <img id="essential-img-1" alt="grid-2-2" class="resize-img">
  </div>
</div>
</div>


<div class="just-in">
<h2 class="box-h2-new1">Just In</h2>
<a href="#" class="box-just-in"><img id="justin-img" alt="jordan" width="100%" height="auto"></a>
</div>
<div class="display-text-link">
<div class="home-page-p1">
  <div class="home-page-p1-1 flex-p1-1">
    <p class="format-text1 m-bottom1">'Playoffs'</p>
    <h4 class="format-text2 m-bottom2">AIR JORDAN XXXVII</h4>
    <p class="format-text3 m-top1">When Michael Jordan competed in the postseason, he often wore dark shoes during road games 
      to symbolize a stealthier approach to dominance. Inspired by that legacy—with nods to iconic 
      OG Huarache and AJ7 colourway—the Air Jordan XXXVII 'Playoffs' is built for game seven.</p>
  </div>
</div>
</div>

<!-- end content -->
`
component.homePageSingin = `
<nav class="row format-row nvabar-frame z3 show-nvabar hidden-nvabar">
        <div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0">
            <div class="row format-row padding-left-48">
                <div class="col-lg-2 col-md-2 col-sm-2 col-2 padding-0">
                    <a href="#banner-img" class="logo-nvabar z3">
                        <svg height="24px" width="24px" fill="#111" viewBox="0 0 26 32">
                            <path
                                d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0">
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0" id="expand-account">
            <div class="row format-row padding-right-48">
                <div class="col-lg-2 col-md-2 col-sm-2 col-2 padding-0">
                </div>
                <div class="col-lg-10 col-md-10 col-sm-10 col-10 padding-0">
                    <div class="row format-row nav1-hover-account">
                        <div class="col-lg-10 col-md-10 col-sm-10 col-10 padding-0 nav1-text-account">
                            <span id="id-account"></span>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-2 col-2 padding-0 nav1-text-account">
                            <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                                role="img" width="24px" height="24px" fill="none" data-var="glyph"
                                style="display: inline-block;">
                                <path stroke="currentColor" stroke-width="2"
                                    d="M3.75 21v-3a3.75 3.75 0 013.75-3.75h9A3.75 3.75 0 0120.25 18v3"></path>
                                <path stroke="currentColor" stroke-width="2"
                                    d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pre-account-expand">
                            <div class="pre-account-expand-content">
                                <nav class="pre-acct-account pt24-sm pr24-sm pb24-sm pl24-sm">
                                    <p class="pl8-sm">Account</p>
                                    <ul>
                                        <li class="content-expand"><a class="logout-btn" id="gotoProfile">Profile</a></li>
                                        <li class="content-expand"><a class="logout-btn" id="gotoChangePass">Change Password</a>
                                        </li>
                                        <li class="content-expand"><a class="logout-btn" id="gotoHistoryBuy">History Buy</a>
                                        </li>
                                        <li class="content-expand"><button class="logout-btn"
                                                id="logout-btn" data-toggle="modal" data-target="#exampleModalLogout">Logout</button></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
        </div>
</nav>
<div class="modal fade" id="exampleModalLogout" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel1"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                Do you want to quit of this page?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-dark" id="quitePage" data-dismiss="modal">OK</button>
            </div>
        </div>
    </div>
</div>
<header>
        <div class="row format-row padding-top-10 padding-bottom-10 flex-header-1">
            <div class="col-lg-1 col-md-2 col-sm-3 col-3 padding-0 padding-left-48 item1">
                <a href="#banner-img">
                    <img alt="logo"
                        src="//upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/42px-Letter_t.svg.png"
                        decoding="async" width="22" height="60"
                        srcset="//upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/63px-Letter_t.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/84px-Letter_t.svg.png 2x"
                        data-file-width="22" data-file-height="60">
                </a>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-5 col-4 padding-0 empty-header1 item2"></div>
            <div class="col-lg-2 col-md-3 col-sm-2 col-2 padding-0 show-box-gender item3">
                <div class="row format-row">
                    <div class="col-lg-4 col-md-4 col-sm-4 col-4 format-text-header1 box-men">
                        <a id="gotoMenDesktop">Men</a>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-4 format-text-header1 box-women">
                        <a id="gotoWomenDesktop">Women</a>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-4 format-text-header1 box-kids">
                        <a id="gotoKidsDesktop">Kids</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-1 col-md-1 col-sm-1 col-1 padding-0 empty-header2 item4"></div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-5 padding-0 item5">
                <div class="row format-row padding-right-48 item5All">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-6 padding-0 box-input-search item5-1">
                        <input placeholder="Search" type="text" id="inputSearch"
                            class="pre-search-input show-input-search input-search">
                        <button class="pre-clear-search pre-clear-search-hide" id="btnClear">
                            <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                                role="img" width="24px" height="24px" fill="none">
                                <path stroke="currentColor" stroke-width="1.5"
                                    d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="col-lg-6 col-md-3 col-sm-5 col-4 padding-0 empty-header3 item5-2"></div>
                    <div class="col-lg-2 col-md-3 col-sm-4 col-4 padding-0 flex-header-start item5-3">
                        <button class="pre-search-btn pre-search-hover" id="btnSearch">
                            <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                                role="img" width="24px" height="24px" fill="none">
                                <path stroke="currentColor" stroke-width="1.5"
                                    d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-4 col-4 padding-0 flex-header-3 hide-favorite-btn item5-4">
                        <a id="gotoFavouriteDesktop" title="Favourites" class="pre-favorite">
                            <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                                role="img" width="24px" height="24px" fill="none">
                                <path stroke="currentColor" stroke-width="1.5"
                                    d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451">
                                </path>
                            </svg>
                        </a>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-4 col-4 padding-0 flex-header-3 hide-menu-btn item5-6">
                        <button class="pre-expand-option pre-expand-option-hover" title="Mobile Menu" id="expandOption">
                            <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                                role="img" width="24px" height="24px" fill="none">
                                <path stroke="currentColor" stroke-width="1.5" d="M21 5.25H3M21 12H3m18 6.75H3"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-4 col-4 padding-0 flex-header-4 item5-5">
                        <button class="pre-bag-btn pre-bag-hover" id="gotoBagDesktop" title="Bag Items">
                            <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                                role="img" width="24px" height="24px" fill="none">
                                <path stroke="currentColor" stroke-width="1.5"
                                    d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5">
                                </path>
                            </svg>
                            <span class="format-content-bag" id="countTotal"></span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-lg-1 col-md-1 col-sm-1 col-1 padding-right-48 end-text-cancel hide-Cancel item6">
                <button type="submit" class="pre-cancel-btn" id="cancelBtn">
                    Cancel
                </button>
            </div>
            <div class="pre-mobile-menu pre-mobile-hide z10">
                <div class="pre-panel pre-panel-root">
                    <button class="pre-btn-mobile-menu close-nav-btn pre-btn-icon ripple" id="close-expand-mobile">
                        <svg aria-hidden="true" class="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img"
                            width="18px" height="18px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5"
                                d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoMen">
                        <span class="pre-link-label headline-3">Men</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                            focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoWomen">
                        <span class="pre-link-label headline-3">Women</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                            focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoKids">
                        <span class="pre-link-label headline-3">Kids</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                            focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoProfileMobile">
                        <span class="pre-link-label headline-4">Profile</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoChangePasswordMobile">
                        <span class="pre-link-label headline-4">Change Password</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoHistoryBuyMobile">
                        <span class="pre-link-label headline-4">History Buy</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoLogoutMobile" data-toggle="modal" data-target="#exampleModalLogout">
                        <span class="pre-link-label headline-4">Logout</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoFavouriteMobile">
                        <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                            role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5"
                                d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451">
                            </path>
                        </svg>
                        <span class="pre-link-label headline-4 padding-left-12">Favourites</span>
                    </button>
                </div>
            </div>
            <div class="pre-mobile-menu-men pre-mobile-hide-men z10">
                <div class="pre-panel pre-panel-root">
                    <button class="pre-btn-mobile-menu close-nav-btn pre-btn-icon ripple" id="closeExpandMobileMen">
                        <svg aria-hidden="true" class="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img"
                            width="18px" height="18px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5"
                                d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gobackAllMen">
                        <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b" focusable="false"
                            viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967">
                            </path>
                        </svg>
                        <span class="pre-link-label headline-3 padding-left-12">All</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn">
                        <span class="pre-link-label headline-3">Men</span>
                    </button>
                    <div class="nav-btn pre-link flex-btn"></div>
                    <button class="nav-btn pre-link flex-btn" id="gotoAllMenShoesMobile">
                        <span class="pre-link-label headline-3">Shoes</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b d-lg-h" focusable="false"
                            viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoJordanMenShoesMobile">
                        <span class="pre-link-label headline-4">Jordan</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoRunningMenShoesMobile">
                        <span class="pre-link-label headline-4">Running</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoFootballMenShoesMobile">
                        <span class="pre-link-label headline-4">Football</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoMenClothing">
                        <span class="pre-link-label headline-3">Clothing</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                            focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoMenGear">
                        <span class="pre-link-label headline-3">Grear</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                            focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="pre-mobile-menu-women pre-mobile-hide-women z10">
                <div class="pre-panel pre-panel-root">
                    <button class="pre-btn-mobile-menu close-nav-btn pre-btn-icon ripple" id="closeExpandMobileWomen">
                        <svg aria-hidden="true" class="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img"
                            width="18px" height="18px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5"
                                d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gobackAllWomen">
                        <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b" focusable="false"
                            viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967">
                            </path>
                        </svg>
                        <span class="pre-link-label headline-3 padding-left-12">All</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn">
                        <span class="pre-link-label headline-3">Women</span>
                    </button>
                    <div class="nav-btn pre-link flex-btn"></div>
                    <button class="nav-btn pre-link flex-btn" id="gotoWomenShoes">
                        <span class="pre-link-label headline-3">Shoes</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b d-lg-h" focusable="false"
                            viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoJordanWomenShoes">
                        <span class="pre-link-label headline-4">Jordan</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoRunningWomenShoes">
                        <span class="pre-link-label headline-4">Running</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoFootballWomenShoes">
                        <span class="pre-link-label headline-4">Football</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoWomenClothing">
                        <span class="pre-link-label headline-3">Clothing</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                            focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoWomenGear">
                        <span class="pre-link-label headline-3">Grear</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                            focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="pre-mobile-menu-kids pre-mobile-hide-kids z10">
                <div class="pre-panel pre-panel-root">
                    <button class="pre-btn-mobile-menu close-nav-btn pre-btn-icon ripple" id="closeExpandMobileKids">
                        <svg aria-hidden="true" class="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img"
                            width="18px" height="18px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5"
                                d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gobackAllKids">
                        <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b" focusable="false"
                            viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967">
                            </path>
                        </svg>
                        <span class="pre-link-label headline-3 padding-left-12">All</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn">
                        <span class="pre-link-label headline-3">Kids</span>
                    </button>
                    <div class="nav-btn pre-link flex-btn"></div>
                    <button class="nav-btn pre-link flex-btn" id="gotoKidsShoes">
                        <span class="pre-link-label headline-3">Shoes</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b d-lg-h" focusable="false"
                            viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoJordanKidsShoes">
                        <span class="pre-link-label headline-4">Jordan</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoRunningKidsShoes">
                        <span class="pre-link-label headline-4">Running</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoFootballKidsShoes">
                        <span class="pre-link-label headline-4">Football</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoKidsClothing">
                        <span class="pre-link-label headline-3">Clothing</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                            focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoKidsGear">
                        <span class="pre-link-label headline-3">Grear</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                            focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </header>
<div class="row format-row new-pre-l-search hide-product-search" id="productSearch">
    <div class="col-lg-12 col-md-12 col-sm-12 col-12 padding-0">
        <div class="grid-6-img" id="shoesSearch">
        
        </div>
    </div>
</div>
<div class="pre-header2 pre-header2-shadow">
</div>
<!-- start content -->

<div class="img-fluid banner-homepage">
<img id="banner-img" class="img-fluid">
</div>
<div class="box-nameType-and-buttonNext">
<h2 class="box-h2">AF1 Highligths</h2>
<div class="nva-button-next">
  <a href="#" class="out-box-text-shop"><span class="box-text-shop">Shop</span></a>
  <button type="button" class="carousel-btn prev-btn" id="prev-btn" onclick="Scrolll()">
    <div class="icon">
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px"
        fill="none">
        <path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path>
      </svg>
    </div>
  </button>

  <button class="carousel-btn next-btn" id="next-btn" onclick="Scrollr()">
    <div class="icon">
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px"
        fill="none">
        <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path>
      </svg>
    </div>
  </button>
</div>
</div>
<section class="row grid-img format-row">
    <ul class="slider">
      <div class = "slides" id="product_items">
     
      </div>
    </ul>
  </section>

<div class="grid-infor">
<h2 class="box-h2-new1">The Essentials</h2>
<div class="flex-2-img">
  <div class="video-ess">
    <video autoplay="" loop="" playsinline="" class="resize-img"
      src="https://static.nike.com/a/images/f_mp4/h_700,c_limit/c0f2257a-06bc-444c-9182-349eb57d99e5/nike-just-do-it.gif"></video>
  </div>
  <div class="image-ess">
    <img id="essential-img-1" alt="grid-2-2" class="resize-img">
  </div>
</div>
</div>

<div class="just-in">
<h2 class="box-h2-new1">Just In</h2>
<a href="#"><img id="justin-img" alt="jordan" width="100%" height="630.5px"></a>
</div>
<div class="display-text-link">
<div class="home-page-p1">
  <div class="home-page-p1-1 flex-p1-1">
    <p class="format-text1 m-bottom1">'Playoffs'</p>
    <h4 class="format-text2 m-bottom2">AIR JORDAN XXXVII</h4>
    <p class="format-text3 m-top1">When Michael Jordan competed in the postseason, he often wore dark shoes during
      road games
      to symbolize a stealthier approach to dominance. Inspired by that legacy—with nods to iconic
      OG Huarache and AJ7 colourway—the Air Jordan XXXVII 'Playoffs' is built for game seven.</p>
  </div>
</div>
</div>
<!-- end content -->
`
component.singinPage = `
<nav class="row format-row nvabar-frame z3 show-nvabar hidden-nvabar">
        <div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0">
            <div class="row format-row padding-left-48">
                <div class="col-lg-2 col-md-2 col-sm-2 col-2 padding-0">
                    <a id="goto-homepage-unsingin" class="logo-nvabar z3">
                        <svg height="24px" width="24px" fill="#111" viewBox="0 0 26 32">
                            <path
                                d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0">
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0 flex-box-signin-signup">
            <div class="row format-row padding-right-48">
                <div class="col-lg-2 col-md-2 col-sm-2 col-2 padding-0">
                </div>
                <div class="col-lg-10 col-md-10 col-sm-10 col-10 padding-0">
                    <div class="row format-row nav1-hover-account">
                        <div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0 nav1-text-account"></div>
                        <div class="col-lg-8 col-md-8 col-sm-8 col-8 padding-0 nav1-text-account">
                          <a id="sing-up-btn" class="pre-singup-item body-singup mr-singup ml-singup">
                          <span id="id-singup">Sign Up</span>
                          </a>
                          <span class="line-body">|</span>
                          <a class="nva-btn mr-singin ml-singin" id="sing-in-btn">
                          <span id="title-singin-member">Sign In</span>
                          </a>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
</nav>
  <div class="box-logo1">
    <div class="logo1">
      <img id="gotoHomepageUnsinginMobile" alt="logo" src="//upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/42px-Letter_t.svg.png"
        decoding="async" width="22" height="60"
        srcset="//upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/63px-Letter_t.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/84px-Letter_t.svg.png 2x"
        data-file-width="22" data-file-height="60">
    </div>
    <h4 class="pre-box-text-title">YOUR ACCOUNT FOR EVERYTHING TUAN</h4>
    <div class="pre-box-singin">
      <form id="form-singin" class="form-box-singin">
        <div class="title-form">
          <p>SIGN IN</p>
        </div>
        <div class="box-input-email">
          <input id="input-email" type="text" placeholder="Email address" class="ip-email" name="email">
          <div class="error-email" id="err-mail"></div>
        </div>
        <div class="box-input-pass">
          <input id="input-pass" type="password" placeholder="Password" class="ip-pass" name="password">
          <i class="fa-solid fa-eye-slash fixed-eye" id="show-password"></i>
          <div class="error-pass" id="err-pass"></div>
        </div>
        <div class="pre-box-forgot-singup">
          <button type="button" id="go-to-singup">Sign Up</button>
          <button type="button" id="forgotPassword" data-toggle="modal" data-target="#exampleModal">Forgot Password</button>
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Forgot Password</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                Reset Password
                <div class="box-input-email">
                  <input id="inputEmailReset" type="text" placeholder="Email address" class="ip-email" name="emailreset">
                  <div class="error-email" id="err-email-reset"></div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-dark" id="resetPassword" data-dismiss="modal">Reset</button>
              </div>
            </div>
          </div>
   </div>
          </div>
        <div class="box-singin-btn">
          <input type="submit" value="SIGN IN" id="btn-singin">
        </div>

      </form>
    </div>
  </div>
 
`
component.singupPage = `
<nav class="row format-row nvabar-frame z3 show-nvabar hidden-nvabar">
        <div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0">
            <div class="row format-row padding-left-48">
                <div class="col-lg-2 col-md-2 col-sm-2 col-2 padding-0">
                    <a id="goto-homepage-unsingin" class="logo-nvabar z3">
                        <svg height="24px" width="24px" fill="#111" viewBox="0 0 26 32">
                            <path
                                d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0">
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0 flex-box-signin-signup">
            <div class="row format-row padding-right-48">
                <div class="col-lg-2 col-md-2 col-sm-2 col-2 padding-0">
                </div>
                <div class="col-lg-10 col-md-10 col-sm-10 col-10 padding-0">
                    <div class="row format-row nav1-hover-account">
                        <div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0 nav1-text-account"></div>
                        <div class="col-lg-8 col-md-8 col-sm-8 col-8 padding-0 nav1-text-account">
                          <a id="sing-up-btn" class="pre-singup-item body-singup mr-singup ml-singup">
                          <span id="id-singup">Sign Up</span>
                          </a>
                          <span class="line-body">|</span>
                          <a class="nva-btn mr-singin ml-singin" id="sing-in-btn">
                          <span id="title-singin-member">Sign In</span>
                          </a>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
</nav>
      <div class="box-logo1">
        <div class="logo1">
          <img id="gotoHomepageUnsinginMobile" alt="logo" src="//upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/42px-Letter_t.svg.png"
            decoding="async" width="22" height="60"
            srcset="//upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/63px-Letter_t.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/84px-Letter_t.svg.png 2x"
            data-file-width="22" data-file-height="60">
        </div>
        <h4 class="pre-box-text-title">YOUR ACCOUNT FOR EVERYTHING TUAN</h4>
        <div class="pre-box-singup">
          <form id="form-singup" class="form-box-singup">
            <div class="title-form">
              <p>SIGN UP</p>
            </div>
            <div class="box-first-last-name">
                    <div class="box-input-first-name">
                        <input id="input-first-name" type="text" placeholder="First name" class="ip-first-name" name="firstname">
                        <div class="error-first-name" id="err-first-name"></div>
                    </div>
                    <div class="box-input-last-name">
                        <input id="input-last-name" type="text" placeholder="Last name" class="ip-last-name" name="lastname">
                        <div class="error-last-name" id="err-last-name"></div>
                    </div>
                </div>
            <div class="box-input-username">
              <input id="input-username" type="text" placeholder="User name" class="ip-user-name" name="username">
              <div class="error-user-name" id="err-user-name"></div>
            </div>
            <div class="box-input-email">
              <input id="input-email" type="text" placeholder="Email address"class="ip-email" name="email">
              <div class="error-email" id="err-mail"></div>
            </div>
            <div class="box-input-pass">
              <input id="input-pass" type="password" placeholder="Password" class="ip-pass" name="password">
              <i class="fa-solid fa-eye-slash fixed-eye" id="show-password"></i>
              <div class="error-pass" id="err-pass"></div>
            </div>
            <div class="box-input-confirmpass">
                <input id="input-confirmpass" type="password" placeholder="Confirm Password" class="ip-confirmpass" name="confirmpassword">
                <i class="fa-solid fa-eye-slash fixed-eye" id="show-confirm-password"></i>
                <div class="error-confirm-pass" id="err-confirm-pass"></div>
            </div>
            <div class="pre-box-goto-singin">
                Do you have an account:
                <button type="button" id='goto-sing-in'>Sign In</button>
            </div>
            <div class="box-singup-btn">
              <button type="submit" id="btn-singup">SIGN UP</button>
            </div>
    
          </form>
        </div>
      </div>
    
`
component.menShoesSinginPage = `
<!-- Start Header and Navabar -->
<nav class="row format-row nvabar-frame z3 show-nvabar hidden-nvabar">
<div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0">
    <div class="row format-row padding-left-48">
        <div class="col-lg-2 col-md-2 col-sm-2 col-2 padding-0">
            <a id="goto-homepage-singin" class="logo-nvabar z3">
                <svg height="24px" width="24px" fill="#111" viewBox="0 0 26 32">
                    <path
                        d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z">
                    </path>
                </svg>
            </a>
        </div>
    </div>
</div>
<div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0">
</div>
<div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0" id="expand-account">
    <div class="row format-row padding-right-48">
        <div class="col-lg-2 col-md-2 col-sm-2 col-2 padding-0">
        </div>
        <div class="col-lg-10 col-md-10 col-sm-10 col-10 padding-0">
            <div class="row format-row nav1-hover-account">
                <div class="col-lg-10 col-md-10 col-sm-10 col-10 padding-0 nav1-text-account">
                    <span id="id-account"></span>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-2 col-2 padding-0 nav1-text-account">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                        role="img" width="24px" height="24px" fill="none" data-var="glyph"
                        style="display: inline-block;">
                        <path stroke="currentColor" stroke-width="2"
                            d="M3.75 21v-3a3.75 3.75 0 013.75-3.75h9A3.75 3.75 0 0120.25 18v3"></path>
                        <path stroke="currentColor" stroke-width="2"
                            d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <div class="pre-account-expand">
                    <div class="pre-account-expand-content">
                        <nav class="pre-acct-account pt24-sm pr24-sm pb24-sm pl24-sm">
                            <p class="pl8-sm">Account</p>
                            <ul>
                                <li class="content-expand"><a class="logout-btn" id="gotoProfile">Profile</a></li>
                                <li class="content-expand"><a class="logout-btn" id="gotoChangePass">Change Password</a>
                                </li>
                                <li class="content-expand"><a class="logout-btn" id="gotoHistoryBuy">History Buy</a>
                                </li>
                                <li class="content-expand"><button class="logout-btn"
                                        id="logout-btn" data-toggle="modal" data-target="#exampleModalLogout">Logout</button></li>
                            </ul>
                        </nav>
                    </div>
                </div>
</div>
</nav>
<div class="modal fade" id="exampleModalLogout" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel1"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                Do you want to quit of this page?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-dark" id="quitePage" data-dismiss="modal">OK</button>
            </div>
        </div>
    </div>
</div>
<header>
<div class="row format-row padding-top-10 padding-bottom-10 flex-header-1">
    <div class="col-lg-1 col-md-2 col-sm-3 col-3 padding-0 padding-left-48 item1">
        <a id="gotoHomePageSinginHeader">
            <img alt="logo"
                src="//upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/42px-Letter_t.svg.png"
                decoding="async" width="22" height="60"
                srcset="//upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/63px-Letter_t.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/84px-Letter_t.svg.png 2x"
                data-file-width="22" data-file-height="60">
        </a>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-5 col-4 padding-0 empty-header1 item2"></div>
    <div class="col-lg-2 col-md-3 col-sm-2 col-2 padding-0 show-box-gender item3">
        <div class="row format-row">
            <div class="col-lg-4 col-md-4 col-sm-4 col-4 format-text-header1 box-men">
                <a href="#inMenShoes">Men</a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-4 format-text-header1 box-women">
                <a id="gotoWomenDesktop">Women</a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-4 format-text-header1 box-kids">
                <a id="gotoKidsDesktop">Kids</a>
            </div>
        </div>
    </div>
    <div class="col-lg-1 col-md-1 col-sm-1 col-1 padding-0 empty-header2 item4"></div>
    <div class="col-lg-4 col-md-4 col-sm-4 col-5 padding-0 item5">
        <div class="row format-row padding-right-48 item5All">
            <div class="col-lg-6 col-md-6 col-sm-6 col-6 padding-0 box-input-search item5-1">
                <input placeholder="Search" type="text" id="inputSearch"
                    class="pre-search-input show-input-search input-search">
                <button class="pre-clear-search pre-clear-search-hide" id="btnClear">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                        role="img" width="24px" height="24px" fill="none">
                        <path stroke="currentColor" stroke-width="1.5"
                            d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                        </path>
                    </svg>
                </button>
            </div>
            <div class="col-lg-6 col-md-3 col-sm-5 col-4 padding-0 empty-header3 item5-2"></div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-4 padding-0 flex-header-start item5-3">
                <button class="pre-search-btn pre-search-hover" id="btnSearch">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                        role="img" width="24px" height="24px" fill="none">
                        <path stroke="currentColor" stroke-width="1.5"
                            d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853">
                        </path>
                    </svg>
                </button>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-4 padding-0 flex-header-3 hide-favorite-btn item5-4">
                <a id="gotoFavouriteDesktop" title="Favourites" class="pre-favorite">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                        role="img" width="24px" height="24px" fill="none">
                        <path stroke="currentColor" stroke-width="1.5"
                            d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451">
                        </path>
                    </svg>
                </a>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-4 padding-0 flex-header-3 hide-menu-btn item5-6">
                <button class="pre-expand-option pre-expand-option-hover" title="Mobile Menu" id="expandOption">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                        role="img" width="24px" height="24px" fill="none">
                        <path stroke="currentColor" stroke-width="1.5" d="M21 5.25H3M21 12H3m18 6.75H3"></path>
                    </svg>
                </button>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-4 padding-0 flex-header-4 item5-5">
                <button class="pre-bag-btn pre-bag-hover" id="gotoBagDesktop" title="Bag Items">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                        role="img" width="24px" height="24px" fill="none">
                        <path stroke="currentColor" stroke-width="1.5"
                            d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5">
                        </path>
                    </svg>
                    <span class="format-content-bag" id="countTotal"></span>
                </button>
            </div>
        </div>
    </div>
    <div class="col-lg-1 col-md-1 col-sm-1 col-1 padding-right-48 end-text-cancel hide-Cancel item6">
        <button type="submit" class="pre-cancel-btn" id="cancelBtn">
            Cancel
        </button>
    </div>
    <div class="pre-mobile-menu pre-mobile-hide z10">
        <div class="pre-panel pre-panel-root">
            <button class="pre-btn-mobile-menu close-nav-btn pre-btn-icon ripple" id="close-expand-mobile">
                <svg aria-hidden="true" class="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img"
                    width="18px" height="18px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5"
                        d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoMen">
                <span class="pre-link-label headline-3">Men</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoWomen">
                <span class="pre-link-label headline-3">Women</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoKids">
                <span class="pre-link-label headline-3">Kids</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoProfileMobile">
                <span class="pre-link-label headline-4">Profile</span>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoChangePasswordMobile">
                <span class="pre-link-label headline-4">Change Password</span>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoHistoryBuyMobile">
                <span class="pre-link-label headline-4">History Buy</span>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoLogoutMobile" data-toggle="modal" data-target="#exampleModalLogout">
                <span class="pre-link-label headline-4">Logout</span>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoFavouriteMobile">
                <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                    role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5"
                        d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451">
                    </path>
                </svg>
                <span class="pre-link-label headline-4 padding-left-12">Favourites</span>
            </button>
        </div>
    </div>
    <div class="pre-mobile-menu-men pre-mobile-hide-men z10">
        <div class="pre-panel pre-panel-root">
            <button class="pre-btn-mobile-menu close-nav-btn pre-btn-icon ripple" id="closeExpandMobileMen">
                <svg aria-hidden="true" class="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img"
                    width="18px" height="18px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5"
                        d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gobackAllMen">
                <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b" focusable="false"
                    viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967">
                    </path>
                </svg>
                <span class="pre-link-label headline-3 padding-left-12">All</span>
            </button>
            <button class="nav-btn pre-link flex-btn">
                <span class="pre-link-label headline-3">Men</span>
            </button>
            <div class="nav-btn pre-link flex-btn"></div>
            <a class="nav-btn pre-link flex-btn" id="gotoAllMenShoesMobile">
                <span class="pre-link-label headline-3">Shoes</span>
                <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b d-lg-h" focusable="false"
                    viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </a>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoJordanMenShoesMobile">
                <span class="pre-link-label headline-4">Jordan</span>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoRunningMenShoesMobile">
                <span class="pre-link-label headline-4">Running</span>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoFootballMenShoesMobile">
                <span class="pre-link-label headline-4">Football</span>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoMenClothing">
                <span class="pre-link-label headline-3">Clothing</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoMenGear">
                <span class="pre-link-label headline-3">Grear</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
        </div>
    </div>
    <div class="pre-mobile-menu-women pre-mobile-hide-women z10">
        <div class="pre-panel pre-panel-root">
            <button class="pre-btn-mobile-menu close-nav-btn pre-btn-icon ripple" id="closeExpandMobileWomen">
                <svg aria-hidden="true" class="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img"
                    width="18px" height="18px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5"
                        d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gobackAllWomen">
                <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b" focusable="false"
                    viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967">
                    </path>
                </svg>
                <span class="pre-link-label headline-3 padding-left-12">All</span>
            </button>
            <button class="nav-btn pre-link flex-btn">
                <span class="pre-link-label headline-3">Women</span>
            </button>
            <div class="nav-btn pre-link flex-btn"></div>
            <button class="nav-btn pre-link flex-btn" id="gotoWomenShoes">
                <span class="pre-link-label headline-3">Shoes</span>
                <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b d-lg-h" focusable="false"
                    viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoJordanWomenShoes">
                <span class="pre-link-label headline-4">Jordan</span>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoRunningWomenShoes">
                <span class="pre-link-label headline-4">Running</span>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoFootballWomenShoes">
                <span class="pre-link-label headline-4">Football</span>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoWomenClothing">
                <span class="pre-link-label headline-3">Clothing</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoWomenGear">
                <span class="pre-link-label headline-3">Grear</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
        </div>
    </div>
    <div class="pre-mobile-menu-kids pre-mobile-hide-kids z10">
        <div class="pre-panel pre-panel-root">
            <button class="pre-btn-mobile-menu close-nav-btn pre-btn-icon ripple" id="closeExpandMobileKids">
                <svg aria-hidden="true" class="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img"
                    width="18px" height="18px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5"
                        d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gobackAllKids">
                <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b" focusable="false"
                    viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967">
                    </path>
                </svg>
                <span class="pre-link-label headline-3 padding-left-12">All</span>
            </button>
            <button class="nav-btn pre-link flex-btn">
                <span class="pre-link-label headline-3">Kids</span>
            </button>
            <div class="nav-btn pre-link flex-btn"></div>
            <button class="nav-btn pre-link flex-btn" id="gotoKidsShoes">
                <span class="pre-link-label headline-3">Shoes</span>
                <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b d-lg-h" focusable="false"
                    viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoJordanKidsShoes">
                <span class="pre-link-label headline-4">Jordan</span>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoRunningKidsShoes">
                <span class="pre-link-label headline-4">Running</span>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoFootballKidsShoes">
                <span class="pre-link-label headline-4">Football</span>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoKidsClothing">
                <span class="pre-link-label headline-3">Clothing</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoKidsGear">
                <span class="pre-link-label headline-3">Grear</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
        </div>
    </div>
</div>
</header>
    <div class="row format-row new-pre-l-search hide-product-search" id="productSearch">
      <div class="col-lg-12 col-md-12 col-sm-12 col-12 padding-0">
          <div class="grid-6-img" id="shoesSearch">
          
          </div>
      </div>
    </div>
    <div class="pre-header2 pre-header2-shadow">
    </div>
    <!-- End Header and Navabar -->

    <!-- Start Content -->
    <div class="row nva-content">
        <div class="col-lg-4 col-md-4 padd-title-men">
            <div class="box-title-men" id="inMenShoes">
                <p class="format-text-title">Men</p>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 move-to-center">
            <div class="box-shoe-clothing-gear">
                <ul class="flex-box-title-child">
                    <li><a id="gotoAllMenShoesDesktop" class="format-text-title-child">Shoes</a></li>
                    <li><a href="#" class="format-text-title-child">Clothing</a></li>
                    <li><a href="#" class="format-text-title-child">Gear</a></li>
                </ul>
            </div>
        </div>
    </div>
    <!-- Start show product -->
    <div class="nva-infor-all-show" style="top:0px; transform: translateY(-1px);" id="men-shoes-margin-top">
        <div class="col-lg-10 col-md-10 padding-0">
            <div class="box-show-selected">
                <p class="format-text-title" id="title-men-shoes"></p>
            </div>
        </div>
        <div class="col-lg-2 col-md-2 line-height-text">
            <div class="anchored--right width-box">
                <button id="sortBy">
                    <span class="dropdown__btn">Sort By</span>
                </button>
                <div class="dropdown__options">
                    <div class="dropdown__options-list">
                        <button id="priceLowHigh" type="button">
                            <span class="child-sortBy">Price: Low-High</span>
                        </button>
                        <br>
                        <button id="priceHighLow" type="button">
                            <span class="child-sortBy">Price: High-Low</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Slide Bar/ Menu -->
    <div class="row flex-men-shoes">
        <div class="col-lg-2 col-md-2 m-r3">
            <nav class="men-shoes-slidebar men-shoes-block men-shoes-white men-shoes-collapse men-shoes-top men-shoes-scroll"
                id="mySideBar">
                <div class="men-shoes-container men-shoes-display-container men-shoes-padding-16">
                    <h3 class="men-shoes-wide"><b>Shoes</b></h3>
                </div>
                <div class="men-shoes-padding-64 men-shoes-large men-shoes-text-gray">
                    <a id="gotoJordanMenShoesDesktop" class="men-shoes-item men-shoes-button">Jordan</a>
                    <a href="#" class="men-shoes-item men-shoes-button">Running</a>
                    <a href="#" class="men-shoes-item men-shoes-button">Football</a>
                </div>
            </nav>
        </div>
        <div class="col-lg-10 col-md-12 col-sm-12 col-12 padding-9">
            <div class="men-shoes-slide-show-procuct">
                <div class="men-shoes-box-padding">
                    <div class="grid-3-img" id="men-shoes-product_items">

                    </div>
                </div>
            </div>
        </div>
    </div>
 
`
component.menShoesUnSigninPage = `
<!-- Start Header and Navabar -->
<nav class="row format-row nvabar-frame z3 show-nvabar hidden-nvabar">
<div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0">
    <div class="row format-row padding-left-48">
        <div class="col-lg-2 col-md-2 col-sm-2 col-2 padding-0">
            <a id="goto-homepage-unsingin" class="logo-nvabar z3">
                <svg height="24px" width="24px" fill="#111" viewBox="0 0 26 32">
                    <path
                        d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z">
                    </path>
                </svg>
            </a>
        </div>
    </div>
</div>
<div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0">
</div>
<div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0 flex-box-signin-signup">
    <div class="row format-row padding-right-48">
        <div class="col-lg-2 col-md-2 col-sm-2 col-2 padding-0">
        </div>
        <div class="col-lg-10 col-md-10 col-sm-10 col-10 padding-0">
            <div class="row format-row nav1-hover-account">
                <div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0 nav1-text-account"></div>
                <div class="col-lg-8 col-md-8 col-sm-8 col-8 padding-0 nav1-text-account">
                  <a id="sing-up-btn" class="pre-singup-item body-singup mr-singup ml-singup">
                  <span id="id-singup">Sign Up</span>
                  </a>
                  <span class="line-body">|</span>
                  <a class="nva-btn mr-singin ml-singin" id="sing-in-btn">
                  <span id="title-singin-member">Sign In</span>
                  </a>
                </div>
            </div>
        </div>
    </div>
   
</div>
</nav>
<header>
<div class="row format-row padding-top-10 padding-bottom-10 flex-header-1">
    <div class="col-lg-1 col-md-2 col-sm-3 col-3 padding-0 padding-left-48 item1">
        <a id="gotoHomePageUnSinginHeader">
            <img alt="logo"
                src="//upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/42px-Letter_t.svg.png"
                decoding="async" width="22" height="60"
                srcset="//upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/63px-Letter_t.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/84px-Letter_t.svg.png 2x"
                data-file-width="22" data-file-height="60">
        </a>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-5 col-4 padding-0 empty-header1 item2"></div>
    <div class="col-lg-2 col-md-3 col-sm-2 col-2 padding-0 show-box-gender item3">
        <div class="row format-row">
            <div class="col-lg-4 col-md-4 col-sm-4 col-4 format-text-header1 box-men">
                <a href="#inMenShoes">Men</a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-4 format-text-header1 box-women">
                <a id="gotoWomenDesktop">Women</a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-4 format-text-header1 box-kids">
                <a id="gotoKidsDesktop">Kids</a>
            </div>
        </div>
    </div>
    <div class="col-lg-1 col-md-1 col-sm-1 col-1 padding-0 empty-header2 item4"></div>
    <div class="col-lg-4 col-md-4 col-sm-4 col-5 padding-0 item5">
        <div class="row format-row padding-right-48 item5All">
            <div class="col-lg-6 col-md-6 col-sm-6 col-6 padding-0 box-input-search item5-1">
                <input placeholder="Search" type="text" id="inputSearch"
                    class="pre-search-input show-input-search input-search">
                <button class="pre-clear-search pre-clear-search-hide" id="btnClear">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                        role="img" width="24px" height="24px" fill="none">
                        <path stroke="currentColor" stroke-width="1.5"
                            d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                        </path>
                    </svg>
                </button>
            </div>
            <div class="col-lg-6 col-md-3 col-sm-5 col-4 padding-0 empty-header3 item5-2"></div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-4 padding-0 flex-header-start item5-3">
                <button class="pre-search-btn pre-search-hover" id="btnSearch">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                        role="img" width="24px" height="24px" fill="none">
                        <path stroke="currentColor" stroke-width="1.5"
                            d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853">
                        </path>
                    </svg>
                </button>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-4 padding-0 flex-header-3 hide-favorite-btn item5-4">
                <a id="gotoFavouriteDesktop" title="Favourites" class="pre-favorite">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                        role="img" width="24px" height="24px" fill="none">
                        <path stroke="currentColor" stroke-width="1.5"
                            d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451">
                        </path>
                    </svg>
                </a>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-4 padding-0 flex-header-3 hide-menu-btn item5-6">
                <button class="pre-expand-option pre-expand-option-hover" title="Mobile Menu" id="expandOption">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                        role="img" width="24px" height="24px" fill="none">
                        <path stroke="currentColor" stroke-width="1.5" d="M21 5.25H3M21 12H3m18 6.75H3"></path>
                    </svg>
                </button>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-4 padding-0 flex-header-4 item5-5">
                <button class="pre-bag-btn pre-bag-hover" id="gotoBagDesktop" title="Bag Items">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                        role="img" width="24px" height="24px" fill="none">
                        <path stroke="currentColor" stroke-width="1.5"
                            d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5">
                        </path>
                    </svg>
                    <span class="format-content-bag" id="countTotal"></span>
                </button>
            </div>
        </div>
    </div>
    <div class="col-lg-1 col-md-1 col-sm-1 col-1 padding-right-48 end-text-cancel hide-Cancel item6">
        <button type="submit" class="pre-cancel-btn" id="cancelBtn">
            Cancel
        </button>
    </div>
    <div class="pre-mobile-menu pre-mobile-hide z10">
        <div class="pre-panel pre-panel-root">
            <button class="pre-btn-mobile-menu close-nav-btn pre-btn-icon ripple" id="close-expand-mobile">
                <svg aria-hidden="true" class="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img"
                    width="18px" height="18px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5"
                        d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoMen">
                <span class="pre-link-label headline-3">Men</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoWomen">
                <span class="pre-link-label headline-3">Women</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoKids">
                <span class="pre-link-label headline-3">Kids</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoSigninMobile">
                <span class="pre-link-label headline-4">Sign In</span>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoSignupMobile">
                <span class="pre-link-label headline-4">Sign Up</span>
            </button>
        </div>
    </div>
    <div class="pre-mobile-menu-men pre-mobile-hide-men z10">
        <div class="pre-panel pre-panel-root">
            <button class="pre-btn-mobile-menu close-nav-btn pre-btn-icon ripple" id="closeExpandMobileMen">
                <svg aria-hidden="true" class="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img"
                    width="18px" height="18px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5"
                        d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gobackAllMen">
                <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b" focusable="false"
                    viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967">
                    </path>
                </svg>
                <span class="pre-link-label headline-3 padding-left-12">All</span>
            </button>
            <button class="nav-btn pre-link flex-btn">
                <span class="pre-link-label headline-3">Men</span>
            </button>
            <div class="nav-btn pre-link flex-btn"></div>
            <button class="nav-btn pre-link flex-btn" id="gotoAllMenShoesMobile">
                <span class="pre-link-label headline-3">Shoes</span>
                <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b d-lg-h" focusable="false"
                    viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoJordanMenShoesMobile">
                <span class="pre-link-label headline-4">Jordan</span>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoRunningMenShoesMobile">
                <span class="pre-link-label headline-4">Running</span>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoFootballMenShoesMobile">
                <span class="pre-link-label headline-4">Football</span>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoMenClothing">
                <span class="pre-link-label headline-3">Clothing</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoMenGear">
                <span class="pre-link-label headline-3">Grear</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
        </div>
    </div>
    <div class="pre-mobile-menu-women pre-mobile-hide-women z10">
        <div class="pre-panel pre-panel-root">
            <button class="pre-btn-mobile-menu close-nav-btn pre-btn-icon ripple" id="closeExpandMobileWomen">
                <svg aria-hidden="true" class="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img"
                    width="18px" height="18px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5"
                        d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gobackAllWomen">
                <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b" focusable="false"
                    viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967">
                    </path>
                </svg>
                <span class="pre-link-label headline-3 padding-left-12">All</span>
            </button>
            <button class="nav-btn pre-link flex-btn">
                <span class="pre-link-label headline-3">Women</span>
            </button>
            <div class="nav-btn pre-link flex-btn"></div>
            <button class="nav-btn pre-link flex-btn" id="gotoWomenShoes">
                <span class="pre-link-label headline-3">Shoes</span>
                <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b d-lg-h" focusable="false"
                    viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoJordanWomenShoes">
                <span class="pre-link-label headline-4">Jordan</span>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoRunningWomenShoes">
                <span class="pre-link-label headline-4">Running</span>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoFootballWomenShoes">
                <span class="pre-link-label headline-4">Football</span>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoWomenClothing">
                <span class="pre-link-label headline-3">Clothing</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoWomenGear">
                <span class="pre-link-label headline-3">Grear</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
        </div>
    </div>
    <div class="pre-mobile-menu-kids pre-mobile-hide-kids z10">
        <div class="pre-panel pre-panel-root">
            <button class="pre-btn-mobile-menu close-nav-btn pre-btn-icon ripple" id="closeExpandMobileKids">
                <svg aria-hidden="true" class="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img"
                    width="18px" height="18px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5"
                        d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gobackAllKids">
                <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b" focusable="false"
                    viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967">
                    </path>
                </svg>
                <span class="pre-link-label headline-3 padding-left-12">All</span>
            </button>
            <button class="nav-btn pre-link flex-btn">
                <span class="pre-link-label headline-3">Kids</span>
            </button>
            <div class="nav-btn pre-link flex-btn"></div>
            <button class="nav-btn pre-link flex-btn" id="gotoKidsShoes">
                <span class="pre-link-label headline-3">Shoes</span>
                <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b d-lg-h" focusable="false"
                    viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoJordanKidsShoes">
                <span class="pre-link-label headline-4">Jordan</span>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoRunningKidsShoes">
                <span class="pre-link-label headline-4">Running</span>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoFootballKidsShoes">
                <span class="pre-link-label headline-4">Football</span>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoKidsClothing">
                <span class="pre-link-label headline-3">Clothing</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoKidsGear">
                <span class="pre-link-label headline-3">Grear</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
        </div>
    </div>
</div>
</header>
    <div class="row format-row new-pre-l-search hide-product-search" id="productSearch">
      <div class="col-lg-12 col-md-12 col-sm-12 col-12 padding-0">
          <div class="grid-6-img" id="shoesSearch">
          
          </div>
      </div>
    </div>
    <div class="pre-header2 pre-header2-shadow">
    </div>
    <!-- End Header and Navabar -->

    <!-- Start Content -->
    <div class="row nva-content">
        <div class="col-lg-4 col-md-4 padd-title-men">
            <div class="box-title-men"id="inMenShoes">
                <p class="format-text-title">Men</p>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 move-to-center">
            <div class="box-shoe-clothing-gear">
                <ul class="flex-box-title-child">
                    <li><a id="gotoAllMenShoesDesktop" class="format-text-title-child">Shoes</a></li>
                    <li><a href="#" class="format-text-title-child">Clothing</a></li>
                    <li><a href="#" class="format-text-title-child">Gear</a></li>
                </ul>
            </div>
        </div>
    </div>
    <!-- Start show product -->
    <div class="nva-infor-all-show" style="top:0px; transform: translateY(-1px);" id="men-shoes-margin-top">
        <div class="col-lg-10 col-md-10 padding-0">
            <div class="box-show-selected">
                <p class="format-text-title" id="title-men-shoes"></p>
            </div>
        </div>
        <div class="col-lg-2 col-md-2 line-height-text">
            <div class="anchored--right width-box">
                <button id="sortBy">
                    <span class="dropdown__btn">Sort By</span>
                </button>
                <div class="dropdown__options">
                    <div class="dropdown__options-list">
                        <button id="priceLowHigh" type="button">
                            <span class="child-sortBy">Price: Low-High</span>
                        </button>
                        <br>
                        <button id="priceHighLow" type="button">
                            <span class="child-sortBy">Price: High-Low</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Slide Bar/ Menu -->
    <div class="row flex-men-shoes">
        <div class="col-lg-2 col-md-2 m-r3">
            <nav class="men-shoes-slidebar men-shoes-block men-shoes-white men-shoes-collapse men-shoes-top men-shoes-scroll"
                id="mySideBar">
                <div class="men-shoes-container men-shoes-display-container men-shoes-padding-16">
                    <h3 class="men-shoes-wide"><b>Shoes</b></h3>
                </div>
                <div class="men-shoes-padding-64 men-shoes-large men-shoes-text-gray">
                    <a id="gotoJordanMenShoesDesktop" class="men-shoes-item men-shoes-button">Jordan</a>
                    <a href="#" class="men-shoes-item men-shoes-button">Running</a>
                    <a href="#" class="men-shoes-item men-shoes-button">Football</a>

                </div>
            </nav>
        </div>
        <div class="col-lg-10 col-md-12 padding-9">
            <div class="men-shoes-slide-show-procuct">
                <div class="men-shoes-box-padding">
                    <div class="grid-3-img" id="men-shoes-product_items">

                    </div>
                </div>
            </div>
        </div>
    </div>
 
`
component.bagPage = `
<!-- Start Header and Navabar -->
<nav class="row format-row nvabar-frame z3 show-nvabar hidden-nvabar">
<div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0">
    <div class="row format-row padding-left-48">
        <div class="col-lg-2 col-md-2 col-sm-2 col-2 padding-0">
            <a id="goto-homepage-singin" class="logo-nvabar z3">
                <svg height="24px" width="24px" fill="#111" viewBox="0 0 26 32">
                    <path
                        d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z">
                    </path>
                </svg>
            </a>
        </div>
    </div>
</div>
<div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0">
</div>
<div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0" id="expand-account">
    <div class="row format-row padding-right-48">
        <div class="col-lg-2 col-md-2 col-sm-2 col-2 padding-0" >
        </div>
        <div class="col-lg-10 col-md-10 col-sm-10 col-10 padding-0">
            <div class="row format-row nav1-hover-account">
                <div class="col-lg-10 col-md-10 col-sm-10 col-10 padding-0 nav1-text-account">
                    <span id="id-account"></span>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-2 col-2 padding-0 nav1-text-account">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                        role="img" width="24px" height="24px" fill="none" data-var="glyph"
                        style="display: inline-block;">
                        <path stroke="currentColor" stroke-width="2"
                            d="M3.75 21v-3a3.75 3.75 0 013.75-3.75h9A3.75 3.75 0 0120.25 18v3"></path>
                        <path stroke="currentColor" stroke-width="2"
                            d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <div class="pre-account-expand">
                    <div class="pre-account-expand-content">
                        <nav class="pre-acct-account pt24-sm pr24-sm pb24-sm pl24-sm">
                            <p class="pl8-sm">Account</p>
                            <ul>
                                <li class="content-expand"><a class="logout-btn" id="gotoProfile">Profile</a></li>
                                <li class="content-expand"><a class="logout-btn" id="gotoChangePass">Change Password</a>
                                </li>
                                <li class="content-expand"><a class="logout-btn" id="gotoHistoryBuy">History Buy</a>
                                </li>
                                <li class="content-expand"><button class="logout-btn"
                                        id="logout-btn" data-toggle="modal" data-target="#exampleModalLogout">Logout</button></li>
                            </ul>
                        </nav>
                    </div>
                </div>
</div>
</nav>
<div class="modal fade" id="exampleModalLogout" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel1"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                Do you want to quit of this page?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-dark" id="quitePage" data-dismiss="modal">OK</button>
            </div>
        </div>
    </div>
</div>
<header>
<div class="row format-row padding-top-10 padding-bottom-10 flex-header-1">
    <div class="col-lg-1 col-md-2 col-sm-3 col-3 padding-0 padding-left-48 item1">
        <a id="gotoHomePageSinginHeader">
            <img alt="logo"
                src="//upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/42px-Letter_t.svg.png"
                decoding="async" width="22" height="60"
                srcset="//upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/63px-Letter_t.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/84px-Letter_t.svg.png 2x"
                data-file-width="22" data-file-height="60">
        </a>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-5 col-4 padding-0 empty-header1 item2"></div>
    <div class="col-lg-2 col-md-3 col-sm-2 col-2 padding-0 show-box-gender item3">
        <div class="row format-row">
            <div class="col-lg-4 col-md-4 col-sm-4 col-4 format-text-header1 box-men">
                <a id="gotoMenDesktop">Men</a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-4 format-text-header1 box-women">
                <a id="gotoWomenDesktop">Women</a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-4 format-text-header1 box-kids">
                <a id="gotoKidsDesktop">Kids</a>
            </div>
        </div>
    </div>
    <div class="col-lg-1 col-md-1 col-sm-1 col-1 padding-0 empty-header2 item4"></div>
    <div class="col-lg-4 col-md-4 col-sm-4 col-5 padding-0 item5">
        <div class="row format-row padding-right-48 item5All">
            <div class="col-lg-6 col-md-6 col-sm-6 col-6 padding-0 box-input-search item5-1">
                <input placeholder="Search" type="text" id="inputSearch"
                    class="pre-search-input show-input-search input-search">
                <button class="pre-clear-search pre-clear-search-hide" id="btnClear">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                        role="img" width="24px" height="24px" fill="none">
                        <path stroke="currentColor" stroke-width="1.5"
                            d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                        </path>
                    </svg>
                </button>
            </div>
            <div class="col-lg-6 col-md-3 col-sm-5 col-4 padding-0 empty-header3 item5-2"></div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-4 padding-0 flex-header-start item5-3">
                <button class="pre-search-btn pre-search-hover" id="btnSearch">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                        role="img" width="24px" height="24px" fill="none">
                        <path stroke="currentColor" stroke-width="1.5"
                            d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853">
                        </path>
                    </svg>
                </button>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-4 padding-0 flex-header-3 hide-favorite-btn item5-4">
                <a id="gotoFavouriteDesktop" title="Favourites" class="pre-favorite">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                        role="img" width="24px" height="24px" fill="none">
                        <path stroke="currentColor" stroke-width="1.5"
                            d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451">
                        </path>
                    </svg>
                </a>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-4 padding-0 flex-header-3 hide-menu-btn item5-6">
                <button class="pre-expand-option pre-expand-option-hover" title="Mobile Menu" id="expandOption">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                        role="img" width="24px" height="24px" fill="none">
                        <path stroke="currentColor" stroke-width="1.5" d="M21 5.25H3M21 12H3m18 6.75H3"></path>
                    </svg>
                </button>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-4 padding-0 flex-header-4 item5-5">
                <a class="pre-bag-btn pre-bag-hover" href="#inBag" title="Bag Items">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                        role="img" width="24px" height="24px" fill="none">
                        <path stroke="currentColor" stroke-width="1.5"
                            d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5">
                        </path>
                    </svg>
                    <span class="format-content-bag" id="countTotal"></span>
                </a>
            </div>
        </div>
    </div>
    <div class="col-lg-1 col-md-1 col-sm-1 col-1 padding-right-48 end-text-cancel hide-Cancel item6">
        <button type="submit" class="pre-cancel-btn" id="cancelBtn">
            Cancel
        </button>
    </div>
    <div class="pre-mobile-menu pre-mobile-hide z10">
        <div class="pre-panel pre-panel-root">
            <button class="pre-btn-mobile-menu close-nav-btn pre-btn-icon ripple" id="close-expand-mobile">
                <svg aria-hidden="true" class="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img"
                    width="18px" height="18px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5"
                        d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoMen">
                <span class="pre-link-label headline-3">Men</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoWomen">
                <span class="pre-link-label headline-3">Women</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoKids">
                <span class="pre-link-label headline-3">Kids</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoProfileMobile">
                <span class="pre-link-label headline-4">Profile</span>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoChangePasswordMobile">
                <span class="pre-link-label headline-4">Change Password</span>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoHistoryBuyMobile">
                <span class="pre-link-label headline-4">History Buy</span>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoLogoutMobile" data-toggle="modal" data-target="#exampleModalLogout">
                <span class="pre-link-label headline-4">Logout</span>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoFavouriteMobile">
                <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                    role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5"
                        d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451">
                    </path>
                </svg>
                <span class="pre-link-label headline-4 padding-left-12">Favourites</span>
            </button>
        </div>
    </div>
    <div class="pre-mobile-menu-men pre-mobile-hide-men z10">
        <div class="pre-panel pre-panel-root">
            <button class="pre-btn-mobile-menu close-nav-btn pre-btn-icon ripple" id="closeExpandMobileMen">
                <svg aria-hidden="true" class="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img"
                    width="18px" height="18px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5"
                        d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gobackAllMen">
                <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b" focusable="false"
                    viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967">
                    </path>
                </svg>
                <span class="pre-link-label headline-3 padding-left-12">All</span>
            </button>
            <button class="nav-btn pre-link flex-btn">
                <span class="pre-link-label headline-3">Men</span>
            </button>
            <div class="nav-btn pre-link flex-btn"></div>
            <button class="nav-btn pre-link flex-btn" id="gotoAllMenShoesMobile">
                <span class="pre-link-label headline-3">Shoes</span>
                <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b d-lg-h" focusable="false"
                    viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoJordanMenShoesMobile">
                <span class="pre-link-label headline-4">Jordan</span>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoRunningMenShoesMobile">
                <span class="pre-link-label headline-4">Running</span>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoFootballMenShoesMobile">
                <span class="pre-link-label headline-4">Football</span>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoMenClothing">
                <span class="pre-link-label headline-3">Clothing</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoMenGear">
                <span class="pre-link-label headline-3">Grear</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
        </div>
    </div>
    <div class="pre-mobile-menu-women pre-mobile-hide-women z10">
        <div class="pre-panel pre-panel-root">
            <button class="pre-btn-mobile-menu close-nav-btn pre-btn-icon ripple" id="closeExpandMobileWomen">
                <svg aria-hidden="true" class="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img"
                    width="18px" height="18px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5"
                        d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gobackAllWomen">
                <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b" focusable="false"
                    viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967">
                    </path>
                </svg>
                <span class="pre-link-label headline-3 padding-left-12">All</span>
            </button>
            <button class="nav-btn pre-link flex-btn">
                <span class="pre-link-label headline-3">Women</span>
            </button>
            <div class="nav-btn pre-link flex-btn"></div>
            <button class="nav-btn pre-link flex-btn" id="gotoWomenShoes">
                <span class="pre-link-label headline-3">Shoes</span>
                <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b d-lg-h" focusable="false"
                    viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoJordanWomenShoes">
                <span class="pre-link-label headline-4">Jordan</span>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoRunningWomenShoes">
                <span class="pre-link-label headline-4">Running</span>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoFootballWomenShoes">
                <span class="pre-link-label headline-4">Football</span>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoWomenClothing">
                <span class="pre-link-label headline-3">Clothing</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoWomenGear">
                <span class="pre-link-label headline-3">Grear</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
        </div>
    </div>
    <div class="pre-mobile-menu-kids pre-mobile-hide-kids z10">
        <div class="pre-panel pre-panel-root">
            <button class="pre-btn-mobile-menu close-nav-btn pre-btn-icon ripple" id="closeExpandMobileKids">
                <svg aria-hidden="true" class="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img"
                    width="18px" height="18px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5"
                        d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gobackAllKids">
                <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b" focusable="false"
                    viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967">
                    </path>
                </svg>
                <span class="pre-link-label headline-3 padding-left-12">All</span>
            </button>
            <button class="nav-btn pre-link flex-btn">
                <span class="pre-link-label headline-3">Kids</span>
            </button>
            <div class="nav-btn pre-link flex-btn"></div>
            <button class="nav-btn pre-link flex-btn" id="gotoKidsShoes">
                <span class="pre-link-label headline-3">Shoes</span>
                <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b d-lg-h" focusable="false"
                    viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoJordanKidsShoes">
                <span class="pre-link-label headline-4">Jordan</span>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoRunningKidsShoes">
                <span class="pre-link-label headline-4">Running</span>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoFootballKidsShoes">
                <span class="pre-link-label headline-4">Football</span>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoKidsClothing">
                <span class="pre-link-label headline-3">Clothing</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoKidsGear">
                <span class="pre-link-label headline-3">Grear</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
        </div>
    </div>
</div>
</header>
  <div class="row format-row new-pre-l-search hide-product-search" id="productSearch">
    <div class="col-lg-12 col-md-12 col-sm-12 col-12 padding-0">
        <div class="grid-6-img" id="shoesSearch">
        
        </div>
    </div>
  </div>
    <div class="pre-header2 pre-header2-shadow">
    </div>
    <!-- End Header and Navabar -->
    <!-- Start Content -->
    <!-- Start show product end check out -->
    <!-- <div class="row mt-20" id="inBag">
        <div class="col-lg-7 col-md-7 col-sm-7 col-7 pl-48">
            <p class="text-Bag">Bag</p>
        </div>
        <div class="col-lg-1 col-md-1 col-sm-1 col-1 pl-48">
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-4 pr-48">
            <p class="text-Summary">Summary</p>
        </div>
    </div> -->
    <div class="row format-row mt-20">
        <div class="col-lg-8 col-md-12 col-sm-12 col-12 pl-48 pr-48-991">
            <div class="col-lg-12 col-md-12 col-sm-12 col-12 p-d-0">
                <p class="text-Bag">Bag</p>
            </div>
            <div class="display-products col-lg-12 col-md-12 col-sm-12 col-12 p-d-0 mr-top-40" id="display-bag-item">
                
            </div>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12 col-12 pr-48 pl-48-991">
            <div class="col-lg-12 col-md-12 col-sm-12 col-12 p-d-0">
                <p class="text-Summary">Summary</p>
            </div>
            <div class="flex-subtotal mr-top-40">
                <p class="subtotal">Subtotal</p>
                <div>
                    <span class="sub-price" id="sub-price">0</span>
                    <sup style="text-decoration: underline;">đ</sup>
                </div>
            </div>
            <div class="under-line"></div>
            <div class="flex-total">
                <p class="total">Total</p>
                <div>
                    <span class="total-price" id="total-price">0</span>
                    <sup style="text-decoration: underline;">đ</sup>
                </div>
            </div>
            <div class="under-line"></div>
            <div class="checkout-btn">
                <button type="button" class="text-checkout-btn padding-checkout" id="checkoutBtn">Member Checkout</button>
            </div>
        </div>
    </div>
    <!-- End show product end check out -->
    <!-- End Content -->
   
`
component.favoritePage = `
<!-- Start Header and Navabar -->
<nav class="row format-row nvabar-frame z3 show-nvabar hidden-nvabar">
<div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0">
    <div class="row format-row padding-left-48">
        <div class="col-lg-2 col-md-2 col-sm-2 col-2 padding-0">
            <a id="goto-homepage-singin" class="logo-nvabar z3">
                <svg height="24px" width="24px" fill="#111" viewBox="0 0 26 32">
                    <path
                        d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z">
                    </path>
                </svg>
            </a>
        </div>
    </div>
</div>
<div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0">
</div>
<div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0" id="expand-account">
    <div class="row format-row padding-right-48">
        <div class="col-lg-2 col-md-2 col-sm-2 col-2 padding-0">
        </div>
        <div class="col-lg-10 col-md-10 col-sm-10 col-10 padding-0">
            <div class="row format-row nav1-hover-account">
                <div class="col-lg-10 col-md-10 col-sm-10 col-10 padding-0 nav1-text-account">
                    <span id="id-account"></span>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-2 col-2 padding-0 nav1-text-account">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                        role="img" width="24px" height="24px" fill="none" data-var="glyph"
                        style="display: inline-block;">
                        <path stroke="currentColor" stroke-width="2"
                            d="M3.75 21v-3a3.75 3.75 0 013.75-3.75h9A3.75 3.75 0 0120.25 18v3"></path>
                        <path stroke="currentColor" stroke-width="2"
                            d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <div class="pre-account-expand">
                    <div class="pre-account-expand-content">
                        <nav class="pre-acct-account pt24-sm pr24-sm pb24-sm pl24-sm">
                            <p class="pl8-sm">Account</p>
                            <ul>
                                <li class="content-expand"><a class="logout-btn" id="gotoProfile">Profile</a></li>
                                <li class="content-expand"><a class="logout-btn" id="gotoChangePass">Change Password</a>
                                </li>
                                <li class="content-expand"><a class="logout-btn" id="gotoHistoryBuy">History Buy</a>
                                </li>
                                <li class="content-expand"><button class="logout-btn"
                                        id="logout-btn" data-toggle="modal" data-target="#exampleModalLogout">Logout</button></li>
                            </ul>
                        </nav>
                    </div>
                </div>
</div>
</nav>
<div class="modal fade" id="exampleModalLogout" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel1"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                Do you want to quit of this page?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-dark" id="quitePage" data-dismiss="modal">OK</button>
            </div>
        </div>
    </div>
</div>
<header>
<div class="row format-row padding-top-10 padding-bottom-10 flex-header-1">
    <div class="col-lg-1 col-md-2 col-sm-3 col-3 padding-0 padding-left-48 item1">
        <a id="gotoHomePageSinginHeader">
            <img alt="logo"
                src="//upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/42px-Letter_t.svg.png"
                decoding="async" width="22" height="60"
                srcset="//upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/63px-Letter_t.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/84px-Letter_t.svg.png 2x"
                data-file-width="22" data-file-height="60">
        </a>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-5 col-4 padding-0 empty-header1 item2"></div>
    <div class="col-lg-2 col-md-3 col-sm-2 col-2 padding-0 show-box-gender item3">
        <div class="row format-row">
            <div class="col-lg-4 col-md-4 col-sm-4 col-4 format-text-header1 box-men">
                <a id="gotoMenDesktop">Men</a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-4 format-text-header1 box-women">
                <a id="gotoWomenDesktop">Women</a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-4 format-text-header1 box-kids">
                <a id="gotoKidsDesktop">Kids</a>
            </div>
        </div>
    </div>
    <div class="col-lg-1 col-md-1 col-sm-1 col-1 padding-0 empty-header2 item4"></div>
    <div class="col-lg-4 col-md-4 col-sm-4 col-5 padding-0 item5">
        <div class="row format-row padding-right-48 item5All">
            <div class="col-lg-6 col-md-6 col-sm-6 col-6 padding-0 box-input-search item5-1">
                <input placeholder="Search" type="text" id="inputSearch"
                    class="pre-search-input show-input-search input-search">
                <button class="pre-clear-search pre-clear-search-hide" id="btnClear">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                        role="img" width="24px" height="24px" fill="none">
                        <path stroke="currentColor" stroke-width="1.5"
                            d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                        </path>
                    </svg>
                </button>
            </div>
            <div class="col-lg-6 col-md-3 col-sm-5 col-4 padding-0 empty-header3 item5-2"></div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-4 padding-0 flex-header-start item5-3">
                <button class="pre-search-btn pre-search-hover" id="btnSearch">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                        role="img" width="24px" height="24px" fill="none">
                        <path stroke="currentColor" stroke-width="1.5"
                            d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853">
                        </path>
                    </svg>
                </button>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-4 padding-0 flex-header-3 hide-favorite-btn item5-4">
                <a href="#men-shoes-margin-top" title="Favourites" class="pre-favorite">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                        role="img" width="24px" height="24px" fill="none">
                        <path stroke="currentColor" stroke-width="1.5"
                            d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451">
                        </path>
                    </svg>
                </a>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-4 padding-0 flex-header-3 hide-menu-btn item5-6">
                <button class="pre-expand-option pre-expand-option-hover" title="Mobile Menu" id="expandOption">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                        role="img" width="24px" height="24px" fill="none">
                        <path stroke="currentColor" stroke-width="1.5" d="M21 5.25H3M21 12H3m18 6.75H3"></path>
                    </svg>
                </button>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-4 padding-0 flex-header-4 item5-5">
                <button class="pre-bag-btn pre-bag-hover" id="gotoBagDesktop" title="Bag Items">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                        role="img" width="24px" height="24px" fill="none">
                        <path stroke="currentColor" stroke-width="1.5"
                            d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5">
                        </path>
                    </svg>
                    <span class="format-content-bag" id="countTotal"></span>
                </button>
            </div>
        </div>
    </div>
    <div class="col-lg-1 col-md-1 col-sm-1 col-1 padding-right-48 end-text-cancel hide-Cancel item6">
        <button type="submit" class="pre-cancel-btn" id="cancelBtn">
            Cancel
        </button>
    </div>
    <div class="pre-mobile-menu pre-mobile-hide z10">
        <div class="pre-panel pre-panel-root">
            <button class="pre-btn-mobile-menu close-nav-btn pre-btn-icon ripple" id="close-expand-mobile">
                <svg aria-hidden="true" class="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img"
                    width="18px" height="18px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5"
                        d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoMen">
                <span class="pre-link-label headline-3">Men</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoWomen">
                <span class="pre-link-label headline-3">Women</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoKids">
                <span class="pre-link-label headline-3">Kids</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoProfileMobile">
                <span class="pre-link-label headline-4">Profile</span>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoChangePasswordMobile">
                <span class="pre-link-label headline-4">Change Password</span>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoHistoryBuyMobile">
                <span class="pre-link-label headline-4">History Buy</span>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoLogoutMobile" data-toggle="modal" data-target="#exampleModalLogout">
                <span class="pre-link-label headline-4">Logout</span>
            </button>
            <a class="nav-btn pre-link flex-btn" href="#men-shoes-margin-top">
                <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                    role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5"
                        d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451">
                    </path>
                </svg>
                <span class="pre-link-label headline-4 padding-left-12">Favourites</span>
            </a>
        </div>
    </div>
    <div class="pre-mobile-menu-men pre-mobile-hide-men z10">
        <div class="pre-panel pre-panel-root">
            <button class="pre-btn-mobile-menu close-nav-btn pre-btn-icon ripple" id="closeExpandMobileMen">
                <svg aria-hidden="true" class="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img"
                    width="18px" height="18px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5"
                        d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gobackAllMen">
                <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b" focusable="false"
                    viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967">
                    </path>
                </svg>
                <span class="pre-link-label headline-3 padding-left-12">All</span>
            </button>
            <button class="nav-btn pre-link flex-btn">
                <span class="pre-link-label headline-3">Men</span>
            </button>
            <div class="nav-btn pre-link flex-btn"></div>
            <button class="nav-btn pre-link flex-btn" id="gotoAllMenShoesMobile">
                <span class="pre-link-label headline-3">Shoes</span>
                <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b d-lg-h" focusable="false"
                    viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoJordanMenShoesMobile">
                <span class="pre-link-label headline-4">Jordan</span>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoRunningMenShoesMobile">
                <span class="pre-link-label headline-4">Running</span>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoFootballMenShoesMobile">
                <span class="pre-link-label headline-4">Football</span>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoMenClothing">
                <span class="pre-link-label headline-3">Clothing</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoMenGear">
                <span class="pre-link-label headline-3">Grear</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
        </div>
    </div>
    <div class="pre-mobile-menu-women pre-mobile-hide-women z10">
        <div class="pre-panel pre-panel-root">
            <button class="pre-btn-mobile-menu close-nav-btn pre-btn-icon ripple" id="closeExpandMobileWomen">
                <svg aria-hidden="true" class="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img"
                    width="18px" height="18px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5"
                        d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gobackAllWomen">
                <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b" focusable="false"
                    viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967">
                    </path>
                </svg>
                <span class="pre-link-label headline-3 padding-left-12">All</span>
            </button>
            <button class="nav-btn pre-link flex-btn">
                <span class="pre-link-label headline-3">Women</span>
            </button>
            <div class="nav-btn pre-link flex-btn"></div>
            <button class="nav-btn pre-link flex-btn" id="gotoWomenShoes">
                <span class="pre-link-label headline-3">Shoes</span>
                <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b d-lg-h" focusable="false"
                    viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoJordanWomenShoes">
                <span class="pre-link-label headline-4">Jordan</span>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoRunningWomenShoes">
                <span class="pre-link-label headline-4">Running</span>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoFootballWomenShoes">
                <span class="pre-link-label headline-4">Football</span>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoWomenClothing">
                <span class="pre-link-label headline-3">Clothing</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoWomenGear">
                <span class="pre-link-label headline-3">Grear</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
        </div>
    </div>
    <div class="pre-mobile-menu-kids pre-mobile-hide-kids z10">
        <div class="pre-panel pre-panel-root">
            <button class="pre-btn-mobile-menu close-nav-btn pre-btn-icon ripple" id="closeExpandMobileKids">
                <svg aria-hidden="true" class="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img"
                    width="18px" height="18px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5"
                        d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gobackAllKids">
                <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b" focusable="false"
                    viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967">
                    </path>
                </svg>
                <span class="pre-link-label headline-3 padding-left-12">All</span>
            </button>
            <button class="nav-btn pre-link flex-btn">
                <span class="pre-link-label headline-3">Kids</span>
            </button>
            <div class="nav-btn pre-link flex-btn"></div>
            <button class="nav-btn pre-link flex-btn" id="gotoKidsShoes">
                <span class="pre-link-label headline-3">Shoes</span>
                <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b d-lg-h" focusable="false"
                    viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoJordanKidsShoes">
                <span class="pre-link-label headline-4">Jordan</span>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoRunningKidsShoes">
                <span class="pre-link-label headline-4">Running</span>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoFootballKidsShoes">
                <span class="pre-link-label headline-4">Football</span>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoKidsClothing">
                <span class="pre-link-label headline-3">Clothing</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoKidsGear">
                <span class="pre-link-label headline-3">Grear</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
        </div>
    </div>
</div>
</header>
    <div class="row format-row new-pre-l-search hide-product-search" id="productSearch">
      <div class="col-lg-12 col-md-12 col-sm-12 col-12 padding-0">
          <div class="grid-6-img" id="shoesSearch">
          
          </div>
      </div>
    </div>
    <div class="pre-header2 pre-header2-shadow">
    </div>
    <!-- End Header and Navabar -->
    <!-- Start Content -->
    <!-- Start show product -->
    <div class="row format-row pd-top-20" id="men-shoes-margin-top">
        <div class="col-lg-6 col-md-6 col-sm-6 col-6 padding-0">
            <div class="box-show-selected-new">
                <p class="format-text-title">Favorites</p>
            </div>
        </div>
       
    </div>
    <!-- Slide Bar/ Menu -->
    <div class="row flex-men-shoes">
        <div class="col-lg-12 col-md-12 padding-0">
            <div class="men-shoes-slide-show-procuct">
                <div class="men-shoes-box-padding-new">
                    <div class="grid-3-img-new" id="men-shoes-product_items">

                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- End show product -->
    <!-- End Content -->
    <footer>
   
`
component.checkoutPage = `
<!-- Start Header and Navabar -->
<header class="pre-1-header top-stack-context">
    <nav class="row format-row">
        <div class="flex-header-menu box-header-menu col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="pre-1-logo pre10-sm col-lg-1 col-md-2 col-sm-3 col-4">
                <a id="goto-home-page-signin">
                    <img class="pos-logo1" alt="logo"
                        src="//upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/42px-Letter_t.svg.png"
                        decoding="async" width="22" height="60"
                        srcset="//upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/63px-Letter_t.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/84px-Letter_t.svg.png 2x"
                        data-file-width="22" data-file-height="60">
                </a>
            </div>
            <div class="col-lg-9 col-md-7 col-sm-5 col-3">
            </div>
            <div class="pre-cart flex-cart col-lg-2 col-md-3 col-sm-4 col-5">
                <div class="pre-chat col-lg-4 col-md-4 col-sm-4 col-4">
                </div>
                <a class="pre-chat col-lg-4 col-md-4 col-sm-4 col-4" id="idChat" title="Chat">
                    <img src="/image/chat.svg" alt="">
                </a>
                <button type="button" id="cart" class="col-lg-4 col-md-4 col-sm-4 col-4" data-toggle="modal" data-target="#exampleModal" title="Leave Checkout">
                    <img src="/image/cart.svg" alt="">
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel"></h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body">
                              Do you want to leave check out?
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                              <button type="button" class="btn btn-dark" id="quiteCheckout" data-dismiss="modal">OK</button>
                            </div>
                          </div>
                        </div>
                 </div>
                
            </div>
        </div>
       
    </nav>
</header>
<div class="pre-header2 pre-header2-shadow">
</div>
<!-- End Header and Navabar -->
<!-- Start content -->
<div class="row format-row">
    <div class="checkout-p-d-50 row format-row col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="col-lg-1 hide-empty-content"></div>
        <div class="col-lg-5 col-md-6 col-sm-12 col-12">
            <div class="row format-row">
                <p class="format-text-head-checkout">How would you like to get your order?</p>
            </div>
            <div class="row format-row">
                <div class="box-deliver-it  row format-row col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="pd-farther-delivery row format-row col-lg-6 col-md-6 col-sm-6 col-6">
                        <img src="/image/delivery.svg" class="size-image deliver-mr-30" alt="deliver it">
                        Deliver It
                    </div>
                </div>
            </div>
            <div class="row format-row">
                <p class="format-text-head-checkout form-mt-10">Enter your name and address:</p>
            </div>
            <form id="form-checkout">
                <div class="row format-row box-firstname">
                    <input type="text" placeholder="First name" class="pd-first-name box-input-firstname"
                        name="firstname" required>
                    <span id="error-first-name"></span>
                </div>
                <div class="row format-row form-mt-20 box-lastname">
                    <input type="text" placeholder="Last name" class="pd-last-name box-input-lastname"
                        name="lastname" required>
                    <span id="error-last-name"></span>
                </div>
                <div class="row format-row form-mt-20">
                    <div class="box-select-city">
                        <select name="city" id="selectCity" class="select-city pd-city" required>
                            <option value="" disabled selected class="format-color">Select City</option>
                        </select>
                    </div>
                    <span id="error-city"></span>
                </div>
                <div class="row format-row form-mt-20">
                    <div class="box-select-district">
                        <select name="district" id="selectDistrict" class="select-district pd-district"
                            aria-label="Select District" required>
                            <option value="" disabled selected class="format-color">Select District</option>
                        </select>
                    </div>
                    <span id="error-district"></span>
                </div>
                <div class="row format-row form-mt-20">
                    <div class="box-select-award">
                        <select name="ward" id="selectWard" class="select-award pd-award" aria-label="Select Ward"
                            required>
                            <option value="" disabled selected class="format-color">Select Ward</option>
                        </select>
                    </div>
                    <span id="error-award"></span>
                </div>
                <div class="row format-row form-mt-20 box-country">
                    <input type="text" value="Vietnam" readonly class="pd-country box-input-country" name="country">
                    <div class="pos-circle">
                        <span class="circle"></span>
                    </div>
                </div>
                <div class="box-notificaton2">
                    <span class="content-information2" id="contentInformation2"></span>
                </div>
                <div class="row format-row form-mt-20 form-mb-20 new-margin-top-negative2">
                    <button type="submit" class="submit-btn text-submit padding-submit-btn">Submit</button>
                </div>
            </form>
        </div>
        <div class="col-lg-5 col-md-6 col-sm-12 col-12">
            <div class="row format-row">
                <p class="format-text-head-checkout">In Your Bag</p>
            </div>
            <div class="row format-row flex-subtotal">
                <p class="subtotal">Subtotal</p>
                <div>
                    <span class="sub-price" id="sub-price">0</span>
                    <sup style="text-decoration: underline;">đ</sup>
                </div>
            </div>
            <div class="under-line"></div>
            <div class="row format-row flex-total">
                <p class="total">Total</p>
                <div>
                    <span class="total-price" id="total-price">0</span>
                    <sup style="text-decoration: underline;">đ</sup>
                </div>
            </div>
            <div class="under-line"></div>
            <div class="row format-row checkout-show-product" id="showProductToCheckout">
                
            </div>
        </div>
        <div class="col-lg-1 hide-empty-content">
        </div>
    </div>
</div>
<div class="row format-row">
    <div class="col-lg-4 col-md-6 col-sm-8 col-12 form-chat pos-form-chat padding-0">
        <div class="flex-box-admin">
            <div class="admin-text">Admin</div>
            <button type="button" id="closeChatBtn" aria-label="Close">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
        <div class="new-message" id="messageBox">
        </div>
        <div class="flex-box-reply">
            <div class="box-reply">
                <input type="text" class="new-repply" placeholder="Type a new message..." id="inputMessage">
            </div>
            <div class="flex-btn-reply">
                <button type="button" id="sendMessage"><i class="fa-solid fa-paper-plane"></i></button>
            </div>
        </div>
        
    </div>
</div>
<!-- End content -->

`
component.changePasswordPage = `
<nav class="row format-row nvabar-frame z3 show-nvabar hidden-nvabar">
        <div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0">
            <div class="row format-row padding-left-48">
                <div class="col-lg-2 col-md-2 col-sm-2 col-2 padding-0">
                    <a id="goto-homepage-singin" class="logo-nvabar z3">
                        <svg height="24px" width="24px" fill="#111" viewBox="0 0 26 32">
                            <path
                                d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0">
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0" id="expand-account">
            <div class="row format-row padding-right-48">
                <div class="col-lg-2 col-md-2 col-sm-2 col-2 padding-0">
                </div>
                <div class="col-lg-10 col-md-10 col-sm-10 col-10 padding-0">
                    <div class="row format-row nav1-hover-account">
                        <div class="col-lg-10 col-md-10 col-sm-10 col-10 padding-0 nav1-text-account">
                            <span id="id-account"></span>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-2 col-2 padding-0 nav1-text-account">
                            <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                                role="img" width="24px" height="24px" fill="none" data-var="glyph"
                                style="display: inline-block;">
                                <path stroke="currentColor" stroke-width="2"
                                    d="M3.75 21v-3a3.75 3.75 0 013.75-3.75h9A3.75 3.75 0 0120.25 18v3"></path>
                                <path stroke="currentColor" stroke-width="2"
                                    d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pre-account-expand">
                            <div class="pre-account-expand-content">
                                <nav class="pre-acct-account pt24-sm pr24-sm pb24-sm pl24-sm">
                                    <p class="pl8-sm">Account</p>
                                    <ul>
                                        <li class="content-expand"><a class="logout-btn" id="gotoProfile">Profile</a></li>
                                        <li class="content-expand"><a class="logout-btn" id="gotoChangePass">Change Password</a>
                                        </li>
                                        <li class="content-expand"><button class="logout-btn"
                                                id="logout-btn" data-toggle="modal" data-target="#exampleModalLogout">Logout</button></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
        </div>
</nav>
<div class="modal fade" id="exampleModalLogout" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel1"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                Do you want to quit of this page?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-dark" id="quitePage" data-dismiss="modal">OK</button>
            </div>
        </div>
    </div>
</div>
<div class="box-logo1">
<div class="logo1">
  <img id="gotoHomepageSinginMobile" alt="logo" src="//upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/42px-Letter_t.svg.png"
    decoding="async" width="22" height="60"
    srcset="//upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/63px-Letter_t.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/84px-Letter_t.svg.png 2x"
    data-file-width="22" data-file-height="60">
</div>
<h4 class="pre-box-text-title">YOUR ACCOUNT FOR EVERYTHING TUAN</h4>
<div class="pre-box-singin">
  <form id="form-changepass" class="form-box-singin">
    <div class="title-form">
      <p>CHANGE PASSWORD</p>
    </div>
    <div class="box-input-currentpass">
      <input id="input-currentpass" type="password" placeholder="Current Password" class="ip-currentpass" name="currentpassword">
      <i class="fa-solid fa-eye-slash fixed-eye" id="show-currentpassword"></i>
      <div class="error-currentpass" id="err-currentpass"></div>
    </div>
    <div class="box-input-newpass">
        <input id="input-newpass" type="password" placeholder="New Password" class="ip-pass" name="newpassword">
        <i class="fa-solid fa-eye-slash fixed-eye" id="show-new-password"></i>
        <div class="error-newpass" id="err-newpass"></div>
    </div>
    <div class="box-input-confirmpass">
        <input id="input-confirmpass" type="password" placeholder="Confirm Password" class="ip-confirmpass" name="confirmpassword">
        <i class="fa-solid fa-eye-slash fixed-eye" id="show-confirm-password"></i>
        <div class="error-confirm-pass" id="err-confirm-pass"></div>
    </div>
    <div class="box-singin-btn">
      <input type="submit" value="CHANGE PASSWORD" id="btn-changpass">
    </div>

  </form>
</div>
</div>

`
component.profilePage = `
<!-- Star Header 1 -->
<nav class="row format-row nvabar-frame z3">
<div class="col-lg-4 col-md-4 col-sm-4 col-2 padding-0">
    <div class="row format-row padding-left-48 padding-left-12">
        <div class="col-lg-2 col-md-12 col-sm-12 col-12 padding-0">
            <a id="goto-homepage-singin" class="logo-nvabar z3">
                <svg height="24px" width="24px" fill="#111" viewBox="0 0 26 32">
                    <path
                        d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z">
                    </path>
                </svg>
            </a>
        </div>
    </div>
</div>
<div class="col-lg-4 col-md-3 col-sm-1 col-1 padding-0">
</div>
<div class="col-lg-4 col-md-5 col-sm-7 col-9 padding-0" id="expand-account">
    <div class="row format-row padding-right-48 padding-right-12">
        <div class="col-lg-2 col-md-2 col-sm-1 col-1 padding-0">
        </div>
        <div class="col-lg-10 col-md-10 col-sm-11 col-11 padding-0">
            <div class="row format-row nav1-hover-account">
                <div class="col-lg-10 col-md-10 col-sm-10 col-10 padding-0 nav1-text-account">
                    <span id="id-account"></span>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-2 col-2 padding-0 nav1-text-account">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                        role="img" width="24px" height="24px" fill="none" data-var="glyph"
                        style="display: inline-block;">
                        <path stroke="currentColor" stroke-width="2"
                            d="M3.75 21v-3a3.75 3.75 0 013.75-3.75h9A3.75 3.75 0 0120.25 18v3"></path>
                        <path stroke="currentColor" stroke-width="2"
                            d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <div class="pre-account-expand">
                    <div class="pre-account-expand-content">
                        <nav class="pre-acct-account pt24-sm pr24-sm pb24-sm pl24-sm">
                            <p class="pl8-sm">Account</p>
                            <ul>
                                <li class="content-expand"><a class="logout-btn" id="gotoProfile">Profile</a></li>
                                <li class="content-expand"><a class="logout-btn" id="gotoChangePass">Change Password</a>
                                </li>
                                <li class="content-expand"><a class="logout-btn" id="gotoHistoryBuy">History Buy</a>
                                </li>
                                <li class="content-expand"><button class="logout-btn"
                                        id="logout-btn" data-toggle="modal" data-target="#exampleModalLogout">Logout</button></li>
                            </ul>
                        </nav>
                    </div>
                </div>
</div>
</nav>
<div class="modal fade" id="exampleModalLogout" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel1"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                Do you want to quit of this page?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-dark" id="quitePage" data-dismiss="modal">OK</button>
            </div>
        </div>
    </div>
</div>
    <!-- End Header 1 -->
    <!-- Start content -->
    <div>
        <div class="row format-row mt-20">
            <div class="col-lg-4 col-md-4 col-sm-4 col-3 hide-title-profile">
                <div class="mb-20">
                    <a href="#formProfile" class="format-text1" id="my-profile">My Profile</a>
                </div>
                <div class="mb-20">
                    <a href="#formPublicProfile" class="format-text1" id="public-profile">My Public Profile</a>
                </div>
                <div class="underline pos1-top"></div>
            </div>
            
            <div class="col-lg-8 col-md-8 col-sm-12 col-12">
                <form class="form-profile" id="formProfile" action="">
                    <div class="row format-row">
                        <div class="col-lg-9 col-md-12 col-sm-12 col-12 format-title1">My Profile</div>
                    </div>
                    <div class="row format-row mt-20">
                        <div class="col-lg-3 col-md-4 col-sm-4 col-3"></div>
                        <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                            <div class="box-avatar">
                                <img src="" class="format-img" id="avatar" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="row format-row mt-20">
                        <div class="col-lg-9 col-md-12 col-sm-12 col-12 pos-center" id="username"></div>
                    </div>
                    <div class="row format-row mt-20">
                        <div class="col-lg-9 col-md-12 col-sm-12 col-12 pos-center">
                            <button type="button" id="chosesImg" class="choses-img">Choose image</button>
                        </div>
                    </div>
                    <div class="row format-row mt-40">
                        <div class="col-lg-9 col-md-12 col-sm-12 col-12 format-title3">User Name</div>
                        
                    </div>
                    <div class="row format-row">
                        <div class="col-lg-9 col-md-12 col-sm-12 col-12 format-title4">For Account, Public Profile and
                            Certificates</div>
                        
                    </div>
                    <div class="row format-row mt-10">
                        <div class="col-lg-9 col-md-12 col-sm-12 col-12 format-title5">First Name</div>
                        
                    </div>
                    <div class="row format-row mt-10">
                        <div class="col-lg-9 col-md-12 col-sm-12 col-12">
                            <div class="box-firstname1">
                                <input type="text" id="firstName" class="input-firstname" name="firstname">
                            </div>
                        </div>
                    </div>
                    <div class="row format-row mt-10">
                        <div class="col-lg-9 col-md-12 col-sm-12 col-12 format-title5">Last Name</div>
                        
                    </div>
                    <div class="row format-row mt-10">
                        <div class="col-lg-9 col-md-12 col-sm-12 col-12">
                            <div class="box-lastname1">
                                <input type="text" id="lastName" class="input-lastname" name="lastname">
                            </div>
                        </div>
                    </div>
                    <div class="row format-row mt-40">
                        <div class="col-lg-9 col-md-12 col-sm-12 col-12 format-title3">Login</div>
                        
                    </div>
                    <div class="row format-row">
                        <div class="col-lg-9 col-md-12 col-sm-12 col-12 format-title4">Your Tuan.com Login Credentials
                        </div>
                        
                    </div>
                    <div class="row format-row mt-10">
                        <div class="col-lg-9 col-md-12 col-sm-12 col-12 format-title5">Email</div>
                        
                    </div>
                    <div class="row format-row mt-10">
                        <div class="col-lg-9 col-md-12 col-sm-12 col-12">
                            <div class="box-email1">
                                <input type="text" readonly id="email" class="input-email" name="email">
                            </div>
                        </div>
                    </div>
                    <div class="row format-row mt-10">
                        <div class="col-lg-9 col-md-12 col-sm-12 col-12 format-title5">Password</div>
                    </div>
                    <div class="row format-row mt-10">
                        <div class="col-lg-9 col-md-12 col-sm-12 col-12">
                            <div class="box-password1">
                                <input type="password" readonly id="password" class="input-password" name="password">
                            </div>
                        </div>
                    </div>
                    <div class="row format-row mt-10">
                        <div class="col-lg-9 col-md-12 col-sm-12 col-12">
                            <div class="row format-row">
                                <div class="col-lg-8 col-md-8 col-sm-8 col-8"></div>
                                <div class="pd-r-0 col-lg-4 col-md-4 col-sm-4 col-4">
                                    <div class="box-savebtn">
                                        <button type="submit" id="saveProfile" class="save-btn">SAVE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div class="row format-row mt-40 mb-20">
                    <div class="col-lg-9 col-md-12 col-sm-12 col-12">
                        <form action="" class="form-public-profile" id="formPublicProfile">
                            <div class="row format-row mt-20">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-12 format-title1">My Public Profile</div>
                            </div>
                            <div class="row format-row mt-20">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-12 format-title2">Contact Me</div>
                            </div>
                            <div class="row format-row mt-10">
                                <div class="col-lg-4 col-md-4 col-sm-4 col-3 flex-box-email flex-wrap">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1.5em"
                                        height="1.5em" fill="currentColor" class="">
                                        <path
                                            d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z">
                                        </path>
                                    </svg>
                                    <div class="format-title-email">Email</div>
                                </div>
                                <div class="col-lg-8 col-md-8 col-sm-8 col-9">
                                    <div class="box-contact-email">
                                        <input type="text" id="contactEmail" class="input-contact-email"
                                            name="contactemail">
                                    </div>
                                </div>
                            </div>
                            <div class="row format-row mt-10">
                                <div class="col-lg-4 col-md-4 col-sm-4 col-3 flex-box-email flex-wrap">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1.5em"
                                        height="1.5em" fill="currentColor" class="">
                                        <path fill-rule="evenodd"
                                            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z">
                                        </path>
                                    </svg>
                                    <div class="format-title-email">Phone</div>
                                </div>
                                <div class="col-lg-8 col-md-8 col-sm-8 col-9">
                                    <div class="box-conatct-phone">
                                        <input type="text" id="contactPhone" class="input-contact-phone"
                                            name="contactphone">
                                    </div>
                                </div>
                            </div>
                            <div class="row format-row mt-10">
                                <div class="col-lg-4 col-md-4 col-sm-4 col-3 flex-box-email flex-wrap">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1.5em"
                                        height="1.5em" fill="currentColor" class="">
                                        <path
                                            d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z">
                                        </path>
                                    </svg>
                                    <div class="format-title-email">Linkedin</div>
                                </div>
                                <div class="col-lg-8 col-md-8 col-sm-8 col-9">
                                    <div class="box-conatct-linkedin">
                                        <input type="text" id="conatctLinkedin" class="input-contact-linkedin"
                                            name="contactlinkedin">
                                    </div>
                                </div>
                            </div>
                            <div class="row format-row mt-10">
                                <div class="col-lg-4 col-md-4 col-sm-4 col-3 flex-box-email flex-wrap">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1.5em"
                                        height="1.5em" fill="currentColor" class="">
                                        <path
                                            d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z">
                                        </path>
                                    </svg>
                                    <div class="format-title-email">Twitter</div>
                                </div>
                                <div class="col-lg-8 col-md-8 col-sm-8 col-9">
                                    <div class="box-contact-twitter">
                                        <input type="text" id="contactTwitter" class="input-conatct-twitter"
                                            name="contactTwitter">
                                    </div>
                                </div>
                            </div>
                            <div class="row format-row mt-10">
                                <div class="col-lg-4 col-md-4 col-sm-4 col-3 flex-box-email flex-wrap">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1.5em"
                                        height="1.5em" fill="currentColor" class="">
                                        <path
                                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">
                                        </path>
                                    </svg>
                                    <div class="format-title-email">GitHub</div>
                                </div>
                                <div class="col-lg-8 col-md-8 col-sm-8 col-9">
                                    <div class="box-contact-github">
                                        <input type="text" id="contactGithub" class="input-contact-github"
                                            name="contactgithub">
                                    </div>
                                </div>
                            </div>
                            <div class="row format-row mt-10">
                                <div class="col-lg-4 col-md-4 col-sm-4 col-3"> </div>
                                <div class="mb-20 col-lg-8 col-md-8 col-sm-8 col-9">
                                    <div class="box-save-publicbtn">
                                        <button type="submit" id="savePublicProfile" class="save-btn">SAVE</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End content -->
 
`
component.chatPage =
    ` <!-- Star Header 1 -->
  <nav class="row format-row nvabar-frame z3 show-nvabar hidden-nvabar">
  <div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0">
      <div class="row format-row padding-left-48">
          <div class="col-lg-2 col-md-2 col-sm-2 col-2 padding-0">
              <a id="goto-homepage-singin" class="logo-nvabar z3">
                  <svg height="24px" width="24px" fill="#111" viewBox="0 0 26 32">
                      <path
                          d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z">
                      </path>
                  </svg>
              </a>
          </div>
      </div>
  </div>
  <div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0">
  </div>
  <div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0" id="expand-account">
      <div class="row format-row padding-right-48">
          <div class="col-lg-2 col-md-2 col-sm-2 col-2 padding-0">
          </div>
          <div class="col-lg-10 col-md-10 col-sm-10 col-10 padding-0">
              <div class="row format-row nav1-hover-account">
                  <div class="col-lg-10 col-md-10 col-sm-10 col-10 padding-0 nav1-text-account">
                      <span id="id-account"></span>
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-2 col-2 padding-0 nav1-text-account">
                      <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                          role="img" width="24px" height="24px" fill="none" data-var="glyph"
                          style="display: inline-block;">
                          <path stroke="currentColor" stroke-width="2"
                              d="M3.75 21v-3a3.75 3.75 0 013.75-3.75h9A3.75 3.75 0 0120.25 18v3"></path>
                          <path stroke="currentColor" stroke-width="2"
                              d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd"></path>
                      </svg>
                  </div>
              </div>
          </div>
      </div>
      <div class="pre-account-expand">
                      <div class="pre-account-expand-content">
                          <nav class="pre-acct-account pt24-sm pr24-sm pb24-sm pl24-sm">
                              <p class="pl8-sm">Account</p>
                              <ul>
                                  <li class="content-expand"><a class="logout-btn" id="gotoProfile">Profile</a></li>
                                  <li class="content-expand"><a class="logout-btn" id="gotoChangePass">Change Password</a>
                                  </li>
                                  <li class="content-expand"><button class="logout-btn"
                                          id="logout-btn" data-toggle="modal" data-target="#exampleModalLogout">Logout</button></li>
                              </ul>
                          </nav>
                      </div>
                  </div>
  </div>
  </nav>
  <div class="modal fade" id="exampleModalLogout" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel1"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                Do you want to quit of this page?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-dark" id="quitePage" data-dismiss="modal">OK</button>
            </div>
        </div>
    </div>
</div>
<!-- End Header 1 -->
<!-- Start content -->
<div class="container chat-app">
<div class="row app-one">
    <div class="col-sm-4 side">
        <div class="side-one">
            <div class="row heading">
                <div class="heading-avatar flex-heading-avatar">
                    <div class="heading-avatar-icon">
                        <img src="" id="avatarURL">
                        <span id="heading-username" class="username-admin">Admin</span>
                        <div class="box-create-new-message set-pos-new-message hidden-box-new-message">
                            <input type="text" placeholder="Enter Username" id="input-username"> 
                            <div id="display-guess-username">
                            </div>        
                        </div>
                    </div>
                </div>
            </div>
            <div class="row searchBox">
                <div class="col-sm-12 searchBox-inner">
                    <div>
                        <input id="searchText" type="text" class="form-control" name="searchText"
                            placeholder="Search">
                        <span class="glyphicon glyphicon-search form-control-feedback"></span>
                    </div>
                </div>
            </div>
            <div class="row side-bar" id="history-chat">
            </div>
            <div class="row side-bar-body"></div>
        </div>
    </div>
    <div class="col-sm-8 conversation">
        <div class="row heading">
            <div class="col-sm-2 col-md-1 col-xs-3 heading-avatar">
                <div class="heading-avatar-icon">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" id="avatarGuess1">
                </div>
            </div>
            <div class="col-sm-8 col-xs-7 heading-name">
                <span class="heading-name-meta" id="head-name-meta"></span>
                <span class="heading-online">Online</span>
            </div>
            <div class="col-sm-1 col-xs-1  heading-dot">
                <i class="fa fa-ellipsis-v fa-2x " aria-hidden="true"></i>
            </div>
        </div>

        <div class="row message" id="conversation">
            <div class="row message-previous">
                <div class="col-sm-12 previous">
                    <a onclick="previous(this)" id="ankitjain28" name="20">
                        Show Previous Message!
                    </a>
                </div>
            </div>
        </div>
        <div class="row reply">
            <div class="col-sm-1 col-xs-1 reply-emojis">
                <i class="fa-solid fa-face-smile"></i>
            </div>
            <div class="col-sm-9 col-xs-9 reply-main">
              <textarea class="form-control" rows="1" id="comment"></textarea>
            </div>
            <div class="col-sm-1 col-xs-1 reply-recording">
              <i class="fa fa-microphone fa-2x" aria-hidden="true"></i>
            </div>
            <div class="col-sm-1 col-xs-1 reply-send">
                <button id="send-btn">
                    <i class="fa-solid fa-paper-plane"></i>
                </button>
            </div>
          </div>
    </div>
</div>
</div>
<!-- End content -->
`
component.detailProductPage = `
<!-- Start Header and Navabar -->
<nav class="row format-row nvabar-frame z3 show-nvabar hidden-nvabar">
<div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0">
    <div class="row format-row padding-left-48">
        <div class="col-lg-2 col-md-2 col-sm-2 col-2 padding-0">
            <a id="goto-homepage-singin" class="logo-nvabar z3">
                <svg height="24px" width="24px" fill="#111" viewBox="0 0 26 32">
                    <path
                        d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z">
                    </path>
                </svg>
            </a>
        </div>
    </div>
</div>
<div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0">
</div>
<div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0" id="expand-account">
    <div class="row format-row padding-right-48">
        <div class="col-lg-2 col-md-2 col-sm-2 col-2 padding-0" >
        </div>
        <div class="col-lg-10 col-md-10 col-sm-10 col-10 padding-0">
            <div class="row format-row nav1-hover-account">
                <div class="col-lg-10 col-md-10 col-sm-10 col-10 padding-0 nav1-text-account">
                    <span id="id-account"></span>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-2 col-2 padding-0 nav1-text-account">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                        role="img" width="24px" height="24px" fill="none" data-var="glyph"
                        style="display: inline-block;">
                        <path stroke="currentColor" stroke-width="2"
                            d="M3.75 21v-3a3.75 3.75 0 013.75-3.75h9A3.75 3.75 0 0120.25 18v3"></path>
                        <path stroke="currentColor" stroke-width="2"
                            d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <div class="pre-account-expand">
                    <div class="pre-account-expand-content">
                        <nav class="pre-acct-account pt24-sm pr24-sm pb24-sm pl24-sm">
                            <p class="pl8-sm">Account</p>
                            <ul>
                                <li class="content-expand"><a class="logout-btn" id="gotoProfile">Profile</a></li>
                                <li class="content-expand"><a class="logout-btn" id="gotoChangePass">Change Password</a>
                                </li>
                                <li class="content-expand"><a class="logout-btn" id="gotoHistoryBuy">History Buy</a>
                                </li>
                                <li class="content-expand"><button class="logout-btn"
                                        id="logout-btn" data-toggle="modal" data-target="#exampleModalLogout">Logout</button></li>
                            </ul>
                        </nav>
                    </div>
                </div>
</div>
</nav>
<div class="modal fade" id="exampleModalLogout" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel1"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                Do you want to quit of this page?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-dark" id="quitePage" data-dismiss="modal">OK</button>
            </div>
        </div>
    </div>
</div>
<header>
<div class="row format-row padding-top-10 padding-bottom-10 flex-header-1">
    <div class="col-lg-1 col-md-2 col-sm-3 col-3 padding-0 padding-left-48 item1">
        <a id="gotoHomePageSinginHeader">
            <img alt="logo"
                src="//upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/42px-Letter_t.svg.png"
                decoding="async" width="22" height="60"
                srcset="//upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/63px-Letter_t.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/84px-Letter_t.svg.png 2x"
                data-file-width="22" data-file-height="60">
        </a>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-5 col-4 padding-0 empty-header1 item2"></div>
    <div class="col-lg-2 col-md-3 col-sm-2 col-2 padding-0 show-box-gender item3">
        <div class="row format-row">
            <div class="col-lg-4 col-md-4 col-sm-4 col-4 format-text-header1 box-men">
                <a id="gotoMenDesktop">Men</a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-4 format-text-header1 box-women">
                <a id="gotoWomenDesktop">Women</a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-4 format-text-header1 box-kids">
                <a id="gotoKidsDesktop">Kids</a>
            </div>
        </div>
    </div>
    <div class="col-lg-1 col-md-1 col-sm-1 col-1 padding-0 empty-header2 item4"></div>
    <div class="col-lg-4 col-md-4 col-sm-4 col-5 padding-0 item5">
        <div class="row format-row padding-right-48 item5All">
            <div class="col-lg-6 col-md-6 col-sm-6 col-6 padding-0 box-input-search item5-1">
                <input placeholder="Search" type="text" id="inputSearch"
                    class="pre-search-input show-input-search input-search">
                <button class="pre-clear-search pre-clear-search-hide" id="btnClear">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                        role="img" width="24px" height="24px" fill="none">
                        <path stroke="currentColor" stroke-width="1.5"
                            d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                        </path>
                    </svg>
                </button>
            </div>
            <div class="col-lg-6 col-md-3 col-sm-5 col-4 padding-0 empty-header3 item5-2"></div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-4 padding-0 flex-header-start item5-3">
                <button class="pre-search-btn pre-search-hover" id="btnSearch">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                        role="img" width="24px" height="24px" fill="none">
                        <path stroke="currentColor" stroke-width="1.5"
                            d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853">
                        </path>
                    </svg>
                </button>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-4 padding-0 flex-header-3 hide-favorite-btn item5-4">
                <a id="gotoFavouriteDesktop" title="Favourites" class="pre-favorite">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                        role="img" width="24px" height="24px" fill="none">
                        <path stroke="currentColor" stroke-width="1.5"
                            d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451">
                        </path>
                    </svg>
                </a>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-4 padding-0 flex-header-3 hide-menu-btn item5-6">
                <button class="pre-expand-option pre-expand-option-hover" title="Mobile Menu" id="expandOption">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                        role="img" width="24px" height="24px" fill="none">
                        <path stroke="currentColor" stroke-width="1.5" d="M21 5.25H3M21 12H3m18 6.75H3"></path>
                    </svg>
                </button>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-4 padding-0 flex-header-4 item5-5">
                <a class="pre-bag-btn pre-bag-hover" id="gotoBagDesktop" title="Bag Items">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                        role="img" width="24px" height="24px" fill="none">
                        <path stroke="currentColor" stroke-width="1.5"
                            d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5">
                        </path>
                    </svg>
                    <span class="format-content-bag" id="countTotal"></span>
                </a>
            </div>
        </div>
    </div>
    <div class="col-lg-1 col-md-1 col-sm-1 col-1 padding-right-48 end-text-cancel hide-Cancel item6">
        <button type="submit" class="pre-cancel-btn" id="cancelBtn">
            Cancel
        </button>
    </div>
    <div class="pre-mobile-menu pre-mobile-hide z10">
        <div class="pre-panel pre-panel-root">
            <button class="pre-btn-mobile-menu close-nav-btn pre-btn-icon ripple" id="close-expand-mobile">
                <svg aria-hidden="true" class="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img"
                    width="18px" height="18px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5"
                        d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoMen">
                <span class="pre-link-label headline-3">Men</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoWomen">
                <span class="pre-link-label headline-3">Women</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoKids">
                <span class="pre-link-label headline-3">Kids</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoProfileMobile">
                <span class="pre-link-label headline-4">Profile</span>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoChangePasswordMobile">
                <span class="pre-link-label headline-4">Change Password</span>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoHistoryBuyMobile">
                <span class="pre-link-label headline-4">History Buy</span>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoLogoutMobile" data-toggle="modal" data-target="#exampleModalLogout">
                <span class="pre-link-label headline-4">Logout</span>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoFavouriteMobile">
                <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                    role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5"
                        d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451">
                    </path>
                </svg>
                <span class="pre-link-label headline-4 padding-left-12">Favourites</span>
            </button>
        </div>
    </div>
    <div class="pre-mobile-menu-men pre-mobile-hide-men z10">
        <div class="pre-panel pre-panel-root">
            <button class="pre-btn-mobile-menu close-nav-btn pre-btn-icon ripple" id="closeExpandMobileMen">
                <svg aria-hidden="true" class="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img"
                    width="18px" height="18px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5"
                        d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gobackAllMen">
                <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b" focusable="false"
                    viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967">
                    </path>
                </svg>
                <span class="pre-link-label headline-3 padding-left-12">All</span>
            </button>
            <button class="nav-btn pre-link flex-btn">
                <span class="pre-link-label headline-3">Men</span>
            </button>
            <div class="nav-btn pre-link flex-btn"></div>
            <button class="nav-btn pre-link flex-btn" id="gotoAllMenShoesMobile">
                <span class="pre-link-label headline-3">Shoes</span>
                <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b d-lg-h" focusable="false"
                    viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoJordanMenShoesMobile">
                <span class="pre-link-label headline-4">Jordan</span>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoRunningMenShoesMobile">
                <span class="pre-link-label headline-4">Running</span>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoFootballMenShoesMobile">
                <span class="pre-link-label headline-4">Football</span>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoMenClothing">
                <span class="pre-link-label headline-3">Clothing</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoMenGear">
                <span class="pre-link-label headline-3">Grear</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
        </div>
    </div>
    <div class="pre-mobile-menu-women pre-mobile-hide-women z10">
        <div class="pre-panel pre-panel-root">
            <button class="pre-btn-mobile-menu close-nav-btn pre-btn-icon ripple" id="closeExpandMobileWomen">
                <svg aria-hidden="true" class="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img"
                    width="18px" height="18px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5"
                        d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gobackAllWomen">
                <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b" focusable="false"
                    viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967">
                    </path>
                </svg>
                <span class="pre-link-label headline-3 padding-left-12">All</span>
            </button>
            <button class="nav-btn pre-link flex-btn">
                <span class="pre-link-label headline-3">Women</span>
            </button>
            <div class="nav-btn pre-link flex-btn"></div>
            <button class="nav-btn pre-link flex-btn" id="gotoWomenShoes">
                <span class="pre-link-label headline-3">Shoes</span>
                <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b d-lg-h" focusable="false"
                    viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoJordanWomenShoes">
                <span class="pre-link-label headline-4">Jordan</span>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoRunningWomenShoes">
                <span class="pre-link-label headline-4">Running</span>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoFootballWomenShoes">
                <span class="pre-link-label headline-4">Football</span>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoWomenClothing">
                <span class="pre-link-label headline-3">Clothing</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoWomenGear">
                <span class="pre-link-label headline-3">Grear</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
        </div>
    </div>
    <div class="pre-mobile-menu-kids pre-mobile-hide-kids z10">
        <div class="pre-panel pre-panel-root">
            <button class="pre-btn-mobile-menu close-nav-btn pre-btn-icon ripple" id="closeExpandMobileKids">
                <svg aria-hidden="true" class="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img"
                    width="18px" height="18px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5"
                        d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gobackAllKids">
                <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b" focusable="false"
                    viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967">
                    </path>
                </svg>
                <span class="pre-link-label headline-3 padding-left-12">All</span>
            </button>
            <button class="nav-btn pre-link flex-btn">
                <span class="pre-link-label headline-3">Kids</span>
            </button>
            <div class="nav-btn pre-link flex-btn"></div>
            <button class="nav-btn pre-link flex-btn" id="gotoKidsShoes">
                <span class="pre-link-label headline-3">Shoes</span>
                <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b d-lg-h" focusable="false"
                    viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoJordanKidsShoes">
                <span class="pre-link-label headline-4">Jordan</span>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoRunningKidsShoes">
                <span class="pre-link-label headline-4">Running</span>
            </button>
            <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoFootballKidsShoes">
                <span class="pre-link-label headline-4">Football</span>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoKidsClothing">
                <span class="pre-link-label headline-3">Clothing</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
            <button class="nav-btn pre-link flex-btn" id="gotoKidsGear">
                <span class="pre-link-label headline-3">Grear</span>
                <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                    focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                    </path>
                </svg>
            </button>
        </div>
    </div>
</div>
</header>
  <div class="row format-row new-pre-l-search hide-product-search" id="productSearch">
    <div class="col-lg-12 col-md-12 col-sm-12 col-12 padding-0">
        <div class="grid-6-img" id="shoesSearch">
        
        </div>
    </div>
  </div>
<div class="pre-header2 pre-header2-shadow">
</div>
<div class="row format-row padding-top-20">
        <div class="col-lg-4 col-md-6 col-sm-12 col-12 padding-0 padding-left-48 padding-left48-new padding-right48-new padding-right-new padding-left-new">
            <img src="" alt="" class="resize-image mainImg">
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12 padding-0 padding-left-12 padding-left48-new padding-right48-new padding-right-new padding-left-new padding-top-new">
            <div class="inforBag">
                <span class="text-name nameproduct">Name</span>
                <br>
                <span class="text-gender gender">Gender</span>
                <br>
                <span class="text-color color">Color</span>
                <br>
                <span class="text-price price">Price<sup style="text-decoration: underline;">đ</sup></span>
                <p class="text-inform padding-top-10">Open the box and transport yourself. Inspired by bringing elements of the outdoors inside and vice versa, this rendition of the hoops original celebrates those things we can't do without. Swoosh characters on the tongue and a sleek finish put a fresh spin on what you know best: era-echoing, '80s construction, bold details and nothin'-but-net style.</p>
            </div>
            <div class="box-thumb-img hide-thumb-img" id="thumbImg">
            
            </div>
            <div class="box-view-product-detail">
                <button id="viewProductDetail" class="view-product-detail-btn" data-toggle="modal"
                    data-target="#exampleModal">
                    <span class="text-name">View Product Detail</span>
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog new-modal-dialog" role="document">
                        <div class="modal-content new-modal-content">
                            <div class="modal-header">
                                <div class="modal-title col-lg-1 col-md-2 col-sm-3 col-3" id="exampleModalLabel">
                                    <img src="" alt="" class="resize-image smallImg">
                                </div>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body new-modal-body padding-top-20">
                                <p>From hoops staple to urban street legend, the Nike AF-1 React takes another
                                    step forward into shoe iconography. Amplified features from the outsole to the
                                    branding add dramatic expression to the storied look while Nike React tech assists
                                    with a smooth ride. Stand out to fit in.
                                </p>
                                <p class="padding-top-20">
                                    Benefits
                                </p>
                                <ul class="benefits">
                                    <li>Nike React technology is a lightweight, durable foam that delivers a smooth,
                                        responsive ride.</li>
                                    <li>Originally designed for performance hoops, Nike Air unit in the heel provides
                                        lightweight cushioning.</li>
                                    <li>Crisp leather ages to soft perfection, while translucent textile keeps it airy
                                        and light.</li>
                                    <li>Iconic lines on the upper have been amplified for a dramatic look.</li>
                                    <li>Rubber outsole with translucent accents adds traction and durability.</li>
                                    <li>Colour Shown: Sail/Barely Volt/Ghost Green/Black</li>
                                    <li>Style: DM0573-101</li>
                                    <li>Country/Region of Origin: Vietnam</li>
                                </ul>
                                <p class="padding-top-20">Air Force 1</p>
                                <p>Debuting in 1982 as a basketball must-have, the Air Force 1 came into
                                    its own in the '90s. The clean look of the classic white-on-white AF-1
                                    was endorsed from the basketball courts to the street and beyond. Finding
                                    its rhythm in hip-hop culture, releasing limited collabs and colourways,
                                    Air Force 1 became an iconic sneaker around the globe. And with over 2,000
                                    iterations of this staple, its impact on fashion, music and sneaker culture
                                    can't be denied.
                                </p>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-dark" id="quiteCheckout"
                                    data-dismiss="modal">OK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box-notificaton">
                <span class="content-information" id="contentInformation"></span>
            </div>
            <div class="margin-top-80">
                <button class="add-to-bag" id="addToBag">Add to Bag</button>
            </div>
            
            <div class="padding-top-20">
                <button class="add-to-favourites" id="addToFavourite">Add to Favourites</button>
            </div>

        </div>
        <div
            class="col-lg-4 col-md-12 col-sm-12 col-12 padding-left-8 padding-left-12 padding-left48-new padding-right48-new padding-right-48 padding-right-new padding-left-new padding-top-new">
            <p class="text-review">Review</p>
            <div class="row format-row padding-0 box-detail-review" id="detailReview">
                <div class="col-lg-6 col-md-6 col-sm-6 col-6 padding-0 text-name" id="countReview"></div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-6 padding-0 flex-star">
                    <div id="displayStar">
                        
                    </div>
                </div>
            </div>
            <div class="padding-top-20 hide-rating star-rating">
                <div id="displayDetailStar">
                    
                </div>
            </div>
            <div class="row format-row padding-0 padding-top-20 hide-rating star-rating" id="writeReview">
                <div class="col-lg-6 col-md-6 col-sm-12 col-12 padding-0 box-write-review">
                    <span class="text-name">Write Review</span>
                </div>
            </div>
            <div class="padding-top-20 hide-star-rating click-star">
                <div>
                    <span class="padding-right-12">Overall Rating</span>
                    <i class="fa-regular fa-star class-star" id="star1"></i>
                    <i class="fa-regular fa-star class-star" id="star2"></i>
                    <i class="fa-regular fa-star class-star" id="star3"></i>
                    <i class="fa-regular fa-star class-star" id="star4"></i>
                    <i class="fa-regular fa-star class-star" id="star5"></i>
                    <span class="padding-left-12" id="personalRating"></span>
                </div>
            </div>
            <div class="hide-error error-star">
                <span id="errorStar"></span>
            </div>
            <form id="review">
            <div class="padding-top-20 hide-input-comment input-comment">
                <textarea rows="10" cols="100%" class="input-review" name="textReview" id="inputReview" placeholder="Type a comment..."></textarea>
            </div>
            <div>
                <span id="errorComment"></span>
            </div>
            <div class="box-notificaton2">
                <span class="content-information2" id="contentInformation2"></span>
            </div>
            <div class="padding-top-20 hide-submit-comment submit-comment margin-top2">
                <button class="submit-review" id="submitReview">Submit</button>
            </div>
            </form>
            <div class="review" id="idReview">
            
            </div>
            <div class="row format-row padding-0 padding-top-20 hide-rating more-review" id="moreReviews">
                <div class="col-lg-6 col-md-6 col-sm-12 col-12 padding-0 box-write-review">
                    <button class="text-name" data-toggle="modal" data-target="#exampleModal2">More Reviews</button>
                </div>
                <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog new-modal-dialog" role="document">
                        <div class="modal-content new-modal-content">
                            <div class="modal-header center-items">
                                <div class="modal-title col-lg-1 col-md-2 col-sm-2 col-3" id="exampleModalLabel2">
                                    <img src="" alt="" class="resize-image smallImgMoreRivew">
                                </div>
                                <div class="modal-title col-lg-10 col-md-8 col-sm-8 col-7" id="displayRating">
                                    
                                </div>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body new-modal-body padding-top-20" id="personReview">
                               
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-dark" id="quiteCheckout"
                                    data-dismiss="modal">OK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row format-row padding-0 padding-top-20 hide-rating star-rating bottom-line">
            </div>
        </div>
    </div>
    <div class="line-space"></div>
   
`
component.detailProductPageUnSignin = `
  <div class="row format-row new-pre-l-search hide-product-search" id="productSearch">
    <div class="col-lg-12 col-md-12 col-sm-12 col-12 padding-0">
        <div class="grid-6-img" id="shoesSearch">
        
        </div>
    </div>
  </div>
<div class="pre-header2 pre-header2-shadow">
</div>
<div class="row format-row padding-top-20">
        <div class="col-lg-4 col-md-6 col-sm-12 col-12 padding-0 padding-left-48 padding-left48-new padding-right48-new padding-right-new padding-left-new">
            <img src="" alt="" class="resize-image mainImg">
            <div class="box-notificaton">
                <span class="content-information" id="contentInformation">Add To Bag</span>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12 padding-0 padding-left-12 padding-left48-new padding-right48-new padding-right-new padding-left-new padding-top-new">
            <div class="inforBag">
                <span class="text-name nameproduct">Name</span>
                <br>
                <span class="text-gender gender">Gender</span>
                <br>
                <span class="text-color color">Color</span>
                <br>
                <span class="text-price price">Price<sup style="text-decoration: underline;">đ</sup></span>
                <p class="text-inform padding-top-10">Open the box and transport yourself. Inspired by bringing elements of the outdoors inside and vice versa, this rendition of the hoops original celebrates those things we can't do without. Swoosh characters on the tongue and a sleek finish put a fresh spin on what you know best: era-echoing, '80s construction, bold details and nothin'-but-net style.</p>
            </div>
            <div class="box-thumb-img hide-thumb-img" id="thumbImg">
            
            </div>
            <div class="box-view-product-detail">
                <button id="viewProductDetail" class="view-product-detail-btn" data-toggle="modal"
                    data-target="#exampleModal">
                    <span class="text-name">View Product Detail</span>
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog new-modal-dialog" role="document">
                        <div class="modal-content new-modal-content">
                            <div class="modal-header">
                                <div class="modal-title col-lg-1 col-md-2 col-sm-3 col-3" id="exampleModalLabel">
                                    <img src="" alt="" class="resize-image smallImg">
                                </div>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body new-modal-body padding-top-20">
                                <p>From hoops staple to urban street legend, the Nike AF-1 React takes another
                                    step forward into shoe iconography. Amplified features from the outsole to the
                                    branding add dramatic expression to the storied look while Nike React tech assists
                                    with a smooth ride. Stand out to fit in.
                                </p>
                                <p class="padding-top-20">
                                    Benefits
                                </p>
                                <ul class="benefits">
                                    <li>Nike React technology is a lightweight, durable foam that delivers a smooth,
                                        responsive ride.</li>
                                    <li>Originally designed for performance hoops, Nike Air unit in the heel provides
                                        lightweight cushioning.</li>
                                    <li>Crisp leather ages to soft perfection, while translucent textile keeps it airy
                                        and light.</li>
                                    <li>Iconic lines on the upper have been amplified for a dramatic look.</li>
                                    <li>Rubber outsole with translucent accents adds traction and durability.</li>
                                    <li>Colour Shown: Sail/Barely Volt/Ghost Green/Black</li>
                                    <li>Style: DM0573-101</li>
                                    <li>Country/Region of Origin: Vietnam</li>
                                </ul>
                                <p class="padding-top-20">Air Force 1</p>
                                <p>Debuting in 1982 as a basketball must-have, the Air Force 1 came into
                                    its own in the '90s. The clean look of the classic white-on-white AF-1
                                    was endorsed from the basketball courts to the street and beyond. Finding
                                    its rhythm in hip-hop culture, releasing limited collabs and colourways,
                                    Air Force 1 became an iconic sneaker around the globe. And with over 2,000
                                    iterations of this staple, its impact on fashion, music and sneaker culture
                                    can't be denied.
                                </p>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-dark" id="quiteCheckout"
                                    data-dismiss="modal">OK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="add-to-bag" id="addToBag">Add to Bag</button>
            <div class="padding-top-20">
                <button class="add-to-favourites" id="addToFavourite">Add to Favourites</button>
            </div>

        </div>
        <div
            class="col-lg-4 col-md-12 col-sm-12 col-12 padding-left-8 padding-left-12 padding-left48-new padding-right48-new padding-right-48 padding-right-new padding-left-new padding-top-new">
            <p class="text-review">Review</p>
            <div class="row format-row padding-0 box-detail-review" id="detailReview">
                <div class="col-lg-6 col-md-6 col-sm-6 col-6 padding-0 text-name" id="countReview"></div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-6 padding-0 flex-star">
                    <div id="displayStar">
                        
                    </div>
                </div>
            </div>
            <div class="padding-top-20 hide-rating star-rating">
                <div id="displayDetailStar">
                    
                </div>
            </div>
            <div class="row format-row padding-0 padding-top-20 hide-rating star-rating" id="writeReview">
                <div class="col-lg-6 col-md-6 col-sm-12 col-12 padding-0 box-write-review">
                    <span class="text-name">Write Review</span>
                </div>
            </div>
            <div class="padding-top-20 hide-star-rating click-star">
                <div>
                    <span class="padding-right-12">Overall Rating</span>
                    <i class="fa-regular fa-star class-star" id="star1"></i>
                    <i class="fa-regular fa-star class-star" id="star2"></i>
                    <i class="fa-regular fa-star class-star" id="star3"></i>
                    <i class="fa-regular fa-star class-star" id="star4"></i>
                    <i class="fa-regular fa-star class-star" id="star5"></i>
                    <span class="padding-left-12" id="personalRating"></span>
                </div>
            </div>
            <div class="hide-error error-star">
                <span id="errorStar"></span>
            </div>
            <form id="review">
            <div class="padding-top-20 hide-input-comment input-comment">
                <textarea rows="10" cols="100%" class="input-review" name="textReview" id="inputReview" placeholder="Type a comment..."></textarea>
            </div>
            <div>
                <span id="errorComment"></span>
            </div>
            <div class="padding-top-20 hide-submit-comment submit-comment">
                <button class="submit-review" id="submitReview">Submit</button>
            </div>
            </form>
            <div class="review" id="idReview">
            
            </div>
            <div class="row format-row padding-0 padding-top-20 hide-rating more-review" id="moreReviews">
                <div class="col-lg-6 col-md-6 col-sm-12 col-12 padding-0 box-write-review">
                    <button class="text-name" data-toggle="modal" data-target="#exampleModal2">More Reviews</button>
                </div>
                <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog new-modal-dialog" role="document">
                        <div class="modal-content new-modal-content">
                            <div class="modal-header center-items">
                                <div class="modal-title col-lg-1 col-md-2 col-sm-2 col-3" id="exampleModalLabel2">
                                    <img src="" alt="" class="resize-image smallImgMoreRivew">
                                </div>
                                <div class="modal-title col-lg-10 col-md-8 col-sm-8 col-7" id="displayRating">
                                    
                                </div>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body new-modal-body padding-top-20" id="personReview">
                               
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-dark" id="quiteCheckout"
                                    data-dismiss="modal">OK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row format-row padding-0 padding-top-20 hide-rating star-rating bottom-line">
            </div>
        </div>
    </div>
    <div class="line-space"></div>
   
`
component.footer = `
<footer>
        <div class="out-box-footer">
            <div class="border-box-footer">
                <div class="margin-box-footer row format-row">
                <!-- <div class="flex-box-footer1 col-lg-12 col-md-12 col-sm-12 col-12"> -->
                        <div class="content-footer1 flex-content-footer1 col-lg-8 col-md-8 col-sm-12 col-12">
                            <ul class="content1 col-lg-4 col-md-4 col-sm-5 col-5 padding-0">
                                <li class="footer-link"><a class="format-text-footer1" href="#">FIND A STORE</a></li>
                                <li class="footer-link"><a class="format-text-footer1" href="#">BECOME A MEMBER</a></li>
                                <li class="footer-link"> <a class="format-text-footer1" href="#">SING UP FOR EMAIL</a>
                                </li>
                                <li class="footer-link"><a class="format-text-footer1" href="#">SEND US FEED BACK</a>
                                </li>
                            </ul>
                            <ul class="content2 col-lg-4 col-md-4 col-sm-4 col-4 padding-0">
                                <li class="footer-link"><a class="format-text-footer1" href="#">GET HELP</a></li>
                                <li class="footer-link"><a class="format-text-footer2" href="#">Order Status</a></li>
                                <li class="footer-link"><a class="format-text-footer2" href="#">Dilivery</a></li>
                                <li class="footer-link"> <a class="format-text-footer2" href="#">Returns</a></li>
                                <li class="footer-link"><a class="format-text-footer2" href="#">Payment Options</a></li>
                                <li class="footer-link"><a class="format-text-footer2" href="#">Contact Us</a></li>
                            </ul>
                            <ul class="content3 col-lg-4 col-md-4 col-sm-3 col-3 padding-0">
                                <li class="footer-link"><a class="format-text-footer1" href="#">ABOUT TUAN</a></li>
                                <li class="footer-link"><a class="format-text-footer2" href="#">News</a></li>
                                <li class="footer-link"><a class="format-text-footer2" href="#">Careers</a></li>
                                <li class="footer-link"> <a class="format-text-footer2" href="#">Investors</a></li>
                                <li class="footer-link"><a class="format-text-footer2" href="#">Sustainability</a></li>
                            </ul>
                        </div>
                        <div class="content-footer2 col-lg-4 col-md-4 col-sm-12 col-12">
                            <a href="#" class="format-icon col-lg-2 col-md-2 col-sm-1 col-1 padding-0"><svg
                                    class="social-link-icon" width="30px" fill="#111" height="30px" viewBox="0 0 24 24">
                                    <path
                                        d="M12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm6 9.28v.4c0 1.387-.333 2.72-1 4a8.186 8.186 0 0 1-2.84 3.12c-1.333.853-2.827 1.28-4.48 1.28a8.535 8.535 0 0 1-4.56-1.28h.72c1.387 0 2.613-.427 3.68-1.28-.64 0-1.213-.2-1.72-.6-.507-.4-.867-.92-1.08-1.56l.56.16c.373 0 .64-.053.8-.16a2.67 2.67 0 0 1-1.72-1 2.913 2.913 0 0 1-.68-1.88c.427.267.88.4 1.36.4-.907-.533-1.36-1.36-1.36-2.48 0-.533.133-1.04.4-1.52.8.96 1.72 1.707 2.76 2.24a8.133 8.133 0 0 0 3.4.88c-.107-.16-.16-.4-.16-.72 0-.8.293-1.493.88-2.08s1.28-.88 2.08-.88 1.547.293 2.24.88c.48-.107 1.12-.347 1.92-.72-.213.747-.64 1.28-1.28 1.6H18c.747-.16 1.28-.32 1.6-.48-.533.693-1.067 1.253-1.6 1.68z">
                                    </path>
                                </svg></a>
                            <a href="#" class="format-icon col-lg-2 col-md-2 col-sm-1 col-1 padding-0"><svg
                                    class="social-link-icon" width="30px" fill="#111" height="30px" viewBox="0 0 24 24">
                                    <path
                                        d="M12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm3.12 12h-2v7.2H10.4V12H8.64V9.52h1.76V8c0-1.12.187-1.92.56-2.4.427-.587 1.2-.88 2.32-.88h2V7.2h-1.2c-.427 0-.693.067-.8.2-.107.133-.16.387-.16.76v1.2h2.16L15.12 12z">
                                    </path>
                                </svg></a>
                            <a href="#" class="format-icon col-lg-2 col-md-2 col-sm-1 col-1 padding-0"><svg
                                    class="social-link-icon" width="30px" fill="#111" height="30px" viewBox="0 0 24 24">
                                    <path
                                        d="M11.28 17.6a.604.604 0 0 1-.2.24.43.43 0 0 1-.24.08c-.08 0-.133-.027-.16-.08a.557.557 0 0 1-.04-.24v-2.96h-.72v3.28a1 1 0 0 0 .12.52c.08.133.2.2.36.2.16 0 .307-.053.44-.16.133-.107.28-.24.44-.4v.48H12v-3.92h-.72v2.96zM6.96 14v-.8H9.6v.8h-.88v4.56h-.88V14h-.88zm4.96-4.72c-.107 0-.2-.04-.28-.12a.384.384 0 0 1-.12-.28v-2.4c0-.053.027-.107.08-.16.053-.053.147-.08.28-.08.133 0 .24.027.32.08a.27.27 0 0 1 .12.24v2.32c0 .107-.04.2-.12.28a.384.384 0 0 1-.28.12zm2 8.32c0-.64.027-1.307.08-2 0-.107-.04-.2-.12-.28-.08-.08-.16-.12-.24-.12h-.12l-.24.16v2.4l.24.16.16.08c.107 0 .173-.027.2-.08.027-.053.04-.16.04-.32zm.08-3.04c.213 0 .387.08.52.24.133.16.2.4.2.72v2.24c0 .267-.053.48-.16.64a.422.422 0 0 1-.44.2 2.1 2.1 0 0 1-.48-.12.506.506 0 0 1-.28-.24v.32h-.8V13.2h.8v1.76c.107-.107.213-.2.32-.28a.532.532 0 0 1 .32-.12zm3.92 5.12c.267-.213.427-.907.48-2.08.053-.587.107-1.147.16-1.68 0-.48-.053-1.013-.16-1.6-.107-1.173-.28-1.893-.52-2.16-.24-.267-1.267-.453-3.08-.56l-2.64-.08-2.72.08c-1.813.107-2.84.293-3.08.56-.24.267-.413.987-.52 2.16a16.07 16.07 0 0 0-.08 1.6c0 .533.027 1.093.08 1.68.107 1.173.28 1.88.52 2.12.24.24 1.267.44 3.08.6l2.72.08 2.64-.08c1.813-.16 2.853-.347 3.12-.56v-.08zM8.4 4h-.96l1.12 3.6v2.24h.96v-2.4L10.64 4h-.96l-.56 2.32h-.08L8.4 4zm2.32 2.56V8.8c0 .373.107.667.32.88.213.213.507.32.88.32s.667-.107.88-.32c.213-.213.32-.507.32-.88V6.56c0-.32-.107-.587-.32-.8-.213-.213-.507-.32-.88-.32s-.667.107-.88.32c-.213.213-.32.48-.32.8zm3.12-.96v3.6a1 1 0 0 0 .12.52c.08.133.213.2.4.2.187 0 .36-.04.52-.12.16-.08.32-.2.48-.36v.48h.88V5.6h-.88v3.2a.523.523 0 0 1-.24.24.645.645 0 0 1-.28.08c-.08 0-.133-.013-.16-.04-.027-.027-.04-.093-.04-.2V5.52h-.8v.08zM12 0c2.187 0 4.2.533 6.04 1.6a11.793 11.793 0 0 1 4.36 4.36C23.467 7.8 24 9.813 24 12s-.533 4.2-1.6 6.04a11.793 11.793 0 0 1-4.36 4.36C16.2 23.467 14.187 24 12 24s-4.2-.533-6.04-1.6a11.793 11.793 0 0 1-4.36-4.36C.533 16.2 0 14.187 0 12s.533-4.2 1.6-6.04A11.793 11.793 0 0 1 5.96 1.6C7.8.533 9.813 0 12 0zm4.56 16.08l-.08-.4c0-.16-.027-.28-.08-.36a.27.27 0 0 0-.24-.12.27.27 0 0 0-.24.12c-.053.08-.08.2-.08.36v.4h.72zm-.32-1.52c.32 0 .573.093.76.28.187.187.28.467.28.84v.96h-1.44v.8c0 .16.027.28.08.36.053.08.147.12.28.12.133 0 .227-.04.28-.12.053-.08.08-.227.08-.44v-.16h.72v.24c0 .373-.093.667-.28.88-.187.213-.453.32-.8.32-.347 0-.613-.107-.8-.32-.187-.213-.28-.507-.28-.88v-1.76c0-.32.107-.587.32-.8.213-.213.48-.32.8-.32z">
                                    </path>
                                </svg></a>
                            <a href="#" class="format-icon col-lg-2 col-md-2 col-sm-1 col-1 padding-0"><svg
                                    class="social-link-icon" width="30px" fill="#111" height="30px" viewBox="0 0 24 24">
                                    <path
                                        d="M16 12.48a4.723 4.723 0 0 1-.56 1.48 3.93 3.93 0 0 1-1.04 1.16 3.428 3.428 0 0 1-1.92.68 3.628 3.628 0 0 1-1.96-.48 3.414 3.414 0 0 1-1.4-1.48c-.48-.96-.587-1.973-.32-3.04H7.68l.08 5.52c0 .107.04.213.12.32.08.107.173.16.28.16h8.32c.107 0 .213-.053.32-.16.107-.107.16-.213.16-.32V10.8h-1.12c.16.533.213 1.093.16 1.68zm-3.68 2c.64 0 1.2-.24 1.68-.72s.72-1.053.72-1.72a2.56 2.56 0 0 0-.68-1.76c-.453-.507-1.013-.76-1.68-.76s-1.24.24-1.72.72-.72 1.053-.72 1.72.227 1.253.68 1.76c.453.507 1 .76 1.64.76h.08zm4.16-7.6h-1.12c-.107 0-.213.053-.32.16-.107.107-.16.213-.16.32v1.36c.107.213.267.32.48.32h1.12c.16 0 .28-.053.36-.16a.532.532 0 0 0 .12-.32v-1.2c0-.107-.053-.213-.16-.32-.107-.107-.213-.16-.32-.16zM12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm6.24 16.88l-.08.08v.08a.926.926 0 0 1-.28.68 1.3 1.3 0 0 1-.68.36H7.52a.871.871 0 0 1-.68-.32 1.536 1.536 0 0 1-.36-.72l-.08-.16.08-9.84c0-.267.093-.507.28-.72.187-.213.413-.347.68-.4h9.68a1.3 1.3 0 0 1 .68.36 1.3 1.3 0 0 1 .36.68l.08 9.92z">
                                    </path>
                                </svg></a>
                        </div>
                <!--</div>-->
                </div>
                <div class="location-footer row format-row ">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                        <a class="col-lg-2 col-md-2 col-sm-3 col-4 padding-top-bottom" title="Selected Location: VN" href="#"
                            style="color: white"><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24"
                                role="img" width="18px" height="15px" fill="none">
                                <path fill="currentColor" fill-rule="evenodd"
                                    d="M4.5 9.001a7.5 7.5 0 1115 0c0 1.205-.385 2.576-.934 3.928-.555 1.364-1.302 2.767-2.08 4.055a39.918 39.918 0 01-2.307 3.405c-.688.905-1.316 1.632-1.711 1.947a.75.75 0 01-.936 0c-.395-.315-1.023-1.042-1.711-1.947a39.916 39.916 0 01-2.306-3.405c-.78-1.288-1.526-2.691-2.08-4.056-.55-1.351-.935-2.722-.935-3.927zM12 12.25a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span style="color: white; font-size: 13px">Vietnam</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
`
component.navUnsignin = `
<nav class="row format-row nvabar-frame z3 show-nvabar hidden-nvabar">
        <div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0">
            <div class="row format-row padding-left-48">
                <div class="col-lg-2 col-md-2 col-sm-2 col-2 padding-0">
                    <a id="goto-homepage-unsingin" class="logo-nvabar z3">
                        <svg height="24px" width="24px" fill="#111" viewBox="0 0 26 32">
                            <path
                                d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0">
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0 flex-box-signin-signup">
            <div class="row format-row padding-right-48">
                <div class="col-lg-2 col-md-2 col-sm-2 col-2 padding-0">
                </div>
                <div class="col-lg-10 col-md-10 col-sm-10 col-10 padding-0">
                    <div class="row format-row nav1-hover-account">
                        <div class="col-lg-4 col-md-4 col-sm-4 col-4 padding-0 nav1-text-account"></div>
                        <div class="col-lg-8 col-md-8 col-sm-8 col-8 padding-0 nav1-text-account">
                          <a id="sing-up-btn" class="pre-singup-item body-singup mr-singup ml-singup">
                          <span id="id-singup">Sign Up</span>
                          </a>
                          <span class="line-body">|</span>
                          <a class="nva-btn mr-singin ml-singin" id="sing-in-btn">
                          <span id="title-singin-member">Sign In</span>
                          </a>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
</nav>
`
component.header1Unsignin = `
<header>
        <div class="row format-row padding-top-10 padding-bottom-10 flex-header-1">
            <div class="col-lg-1 col-md-2 col-sm-3 col-3 padding-0 padding-left-48 item1">
                <a id="gotoHomePageUnSinginHeader">
                    <img alt="logo"
                        src="//upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/42px-Letter_t.svg.png"
                        decoding="async" width="22" height="60"
                        srcset="//upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/63px-Letter_t.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Letter_t.svg/84px-Letter_t.svg.png 2x"
                        data-file-width="22" data-file-height="60">
                </a>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-5 col-4 padding-0 empty-header1 item2"></div>
            <div class="col-lg-2 col-md-3 col-sm-2 col-2 padding-0 show-box-gender item3">
                <div class="row format-row">
                    <div class="col-lg-4 col-md-4 col-sm-4 col-4 format-text-header1 box-men">
                        <a id="gotoMenDesktop">Men</a>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-4 format-text-header1 box-women">
                        <a id="gotoWomenDesktop">Women</a>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-4 format-text-header1 box-kids">
                        <a id="gotoKidsDesktop">Kids</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-1 col-md-1 col-sm-1 col-1 padding-0 empty-header2 item4"></div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-5 padding-0 item5">
                <div class="row format-row padding-right-48 item5All">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-6 padding-0 box-input-search item5-1">
                        <input placeholder="Search" type="text" id="inputSearch"
                            class="pre-search-input show-input-search input-search">
                        <button class="pre-clear-search pre-clear-search-hide" id="btnClear">
                            <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                                role="img" width="24px" height="24px" fill="none">
                                <path stroke="currentColor" stroke-width="1.5"
                                    d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="col-lg-6 col-md-3 col-sm-5 col-4 padding-0 empty-header3 item5-2"></div>
                    <div class="col-lg-2 col-md-3 col-sm-4 col-4 padding-0 flex-header-start item5-3">
                        <button class="pre-search-btn pre-search-hover" id="btnSearch">
                            <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                                role="img" width="24px" height="24px" fill="none">
                                <path stroke="currentColor" stroke-width="1.5"
                                    d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-4 col-4 padding-0 flex-header-3 hide-favorite-btn item5-4">
                        <a id="gotoFavouriteDesktop" title="Favourites" class="pre-favorite">
                            <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                                role="img" width="24px" height="24px" fill="none">
                                <path stroke="currentColor" stroke-width="1.5"
                                    d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451">
                                </path>
                            </svg>
                        </a>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-4 col-4 padding-0 flex-header-3 hide-menu-btn item5-6">
                        <button class="pre-expand-option pre-expand-option-hover" title="Mobile Menu" id="expandOption">
                            <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                                role="img" width="24px" height="24px" fill="none">
                                <path stroke="currentColor" stroke-width="1.5" d="M21 5.25H3M21 12H3m18 6.75H3"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-4 col-4 padding-0 flex-header-4 item5-5">
                        <button class="pre-bag-btn pre-bag-hover" id="gotoBagDesktop" title="Bag Items">
                            <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                                role="img" width="24px" height="24px" fill="none">
                                <path stroke="currentColor" stroke-width="1.5"
                                    d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5">
                                </path>
                            </svg>
                            <span class="format-content-bag" id="countTotal"></span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-lg-1 col-md-1 col-sm-1 col-1 padding-right-48 end-text-cancel hide-Cancel item6">
                <button type="submit" class="pre-cancel-btn" id="cancelBtn">
                    Cancel
                </button>
            </div>
            <div class="pre-mobile-menu pre-mobile-hide z10">
                <div class="pre-panel pre-panel-root">
                    <button class="pre-btn-mobile-menu close-nav-btn pre-btn-icon ripple" id="close-expand-mobile">
                        <svg aria-hidden="true" class="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img"
                            width="18px" height="18px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5"
                                d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoMen">
                        <span class="pre-link-label headline-3">Men</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                            focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoWomen">
                        <span class="pre-link-label headline-3">Women</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                            focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoKids">
                        <span class="pre-link-label headline-3">Kids</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                            focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoSigninMobile">
                        <span class="pre-link-label headline-4">Sign In</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoSignupMobile">
                        <span class="pre-link-label headline-4">Sign Up</span>
                    </button>
                </div>
            </div>
            <div class="pre-mobile-menu-men pre-mobile-hide-men z10">
                <div class="pre-panel pre-panel-root">
                    <button class="pre-btn-mobile-menu close-nav-btn pre-btn-icon ripple" id="closeExpandMobileMen">
                        <svg aria-hidden="true" class="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img"
                            width="18px" height="18px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5"
                                d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gobackAllMen">
                        <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b" focusable="false"
                            viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967">
                            </path>
                        </svg>
                        <span class="pre-link-label headline-3 padding-left-12">All</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn">
                        <span class="pre-link-label headline-3">Men</span>
                    </button>
                    <div class="nav-btn pre-link flex-btn"></div>
                    <button class="nav-btn pre-link flex-btn" id="gotoAllMenShoesMobile">
                        <span class="pre-link-label headline-3">Shoes</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b d-lg-h" focusable="false"
                            viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoJordanMenShoesMobile">
                        <span class="pre-link-label headline-4">Jordan</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoRunningMenShoesMobile">
                        <span class="pre-link-label headline-4">Running</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoFootballMenShoesMobile">
                        <span class="pre-link-label headline-4">Football</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoMenClothing">
                        <span class="pre-link-label headline-3">Clothing</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                            focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoMenGear">
                        <span class="pre-link-label headline-3">Grear</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                            focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="pre-mobile-menu-women pre-mobile-hide-women z10">
                <div class="pre-panel pre-panel-root">
                    <button class="pre-btn-mobile-menu close-nav-btn pre-btn-icon ripple" id="closeExpandMobileWomen">
                        <svg aria-hidden="true" class="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img"
                            width="18px" height="18px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5"
                                d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gobackAllWomen">
                        <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b" focusable="false"
                            viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967">
                            </path>
                        </svg>
                        <span class="pre-link-label headline-3 padding-left-12">All</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn">
                        <span class="pre-link-label headline-3">Women</span>
                    </button>
                    <div class="nav-btn pre-link flex-btn"></div>
                    <button class="nav-btn pre-link flex-btn" id="gotoWomenShoes">
                        <span class="pre-link-label headline-3">Shoes</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b d-lg-h" focusable="false"
                            viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoJordanWomenShoes">
                        <span class="pre-link-label headline-4">Jordan</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoRunningWomenShoes">
                        <span class="pre-link-label headline-4">Running</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoFootballWomenShoes">
                        <span class="pre-link-label headline-4">Football</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoWomenClothing">
                        <span class="pre-link-label headline-3">Clothing</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                            focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoWomenGear">
                        <span class="pre-link-label headline-3">Grear</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                            focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="pre-mobile-menu-kids pre-mobile-hide-kids z10">
                <div class="pre-panel pre-panel-root">
                    <button class="pre-btn-mobile-menu close-nav-btn pre-btn-icon ripple" id="closeExpandMobileKids">
                        <svg aria-hidden="true" class="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img"
                            width="18px" height="18px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5"
                                d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gobackAllKids">
                        <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b" focusable="false"
                            viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967">
                            </path>
                        </svg>
                        <span class="pre-link-label headline-3 padding-left-12">All</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn">
                        <span class="pre-link-label headline-3">Kids</span>
                    </button>
                    <div class="nav-btn pre-link flex-btn"></div>
                    <button class="nav-btn pre-link flex-btn" id="gotoKidsShoes">
                        <span class="pre-link-label headline-3">Shoes</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root d-sm-b d-lg-h" focusable="false"
                            viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoJordanKidsShoes">
                        <span class="pre-link-label headline-4">Jordan</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoRunningKidsShoes">
                        <span class="pre-link-label headline-4">Running</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn padding-left-48" id="gotoFootballKidsShoes">
                        <span class="pre-link-label headline-4">Football</span>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoKidsClothing">
                        <span class="pre-link-label headline-3">Clothing</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                            focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                    <button class="nav-btn pre-link flex-btn" id="gotoKidsGear">
                        <span class="pre-link-label headline-3">Grear</span>
                        <svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h"
                            focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </header>
`
component.navSignin = `
<nav class="row format-row nvabar-frame z3">
<div class="col-lg-4 col-md-4 col-sm-4 col-2 padding-0">
    <div class="row format-row padding-left-48 padding-left-12">
        <div class="col-lg-2 col-md-12 col-sm-12 col-12 padding-0">
            <a id="goto-homepage-singin" class="logo-nvabar z3">
                <svg height="24px" width="24px" fill="#111" viewBox="0 0 26 32">
                    <path
                        d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z">
                    </path>
                </svg>
            </a>
        </div>
    </div>
</div>
<div class="col-lg-4 col-md-3 col-sm-1 col-1 padding-0">
</div>
<div class="col-lg-4 col-md-5 col-sm-7 col-9 padding-0" id="expand-account">
    <div class="row format-row padding-right-48 padding-right-12">
        <div class="col-lg-2 col-md-2 col-sm-1 col-1 padding-0">
        </div>
        <div class="col-lg-10 col-md-10 col-sm-11 col-11 padding-0">
            <div class="row format-row nav1-hover-account">
                <div class="col-lg-10 col-md-10 col-sm-10 col-10 padding-0 nav1-text-account">
                    <span id="id-account"></span>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-2 col-2 padding-0 nav1-text-account">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24"
                        role="img" width="24px" height="24px" fill="none" data-var="glyph"
                        style="display: inline-block;">
                        <path stroke="currentColor" stroke-width="2"
                            d="M3.75 21v-3a3.75 3.75 0 013.75-3.75h9A3.75 3.75 0 0120.25 18v3"></path>
                        <path stroke="currentColor" stroke-width="2"
                            d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <div class="pre-account-expand">
                    <div class="pre-account-expand-content">
                        <nav class="pre-acct-account pt24-sm pr24-sm pb24-sm pl24-sm">
                            <p class="pl8-sm">Account</p>
                            <ul>
                                <li class="content-expand"><a class="logout-btn" id="gotoProfile">Profile</a></li>
                                <li class="content-expand"><a class="logout-btn" id="gotoChangePass">Change Password</a>
                                </li>
                                <li class="content-expand"><a class="logout-btn" href="#renderHistoryBuy">History Buy</a>
                                </li>
                                <li class="content-expand"><button class="logout-btn"
                                        id="logout-btn" data-toggle="modal" data-target="#exampleModalLogout">Logout</button></li>
                            </ul>
                        </nav>
                    </div>
                </div>
</div>
</nav>
<div class="modal fade" id="exampleModalLogout" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel1"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                Do you want to quit of this page?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-dark" id="quitePage" data-dismiss="modal">OK</button>
            </div>
        </div>
    </div>
</div>
`
component.historyBuyPage = `
<div id="renderHistoryBuy">
</div>
`

export default component;