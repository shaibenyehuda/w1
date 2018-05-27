newSite = {
  "masterPage": {
    "structure": {
      "type": "Document",
      "documentType": "document",
      "componentProperties": {},
      "themeData": {},
      "children": [
        {
          "type": "Container",
          "styleId": "hc1",
          "id": "SITE_HEADER",
          "components": [],
          "skin": "wysiwyg.viewer.skins.screenwidthcontainer.TransparentScreen",
          "layout": {
            "width": 980,
            "height": 578,
            "x": 0,
            "y": 0,
            "scale": 1,
            "rotationInDegrees": 0,
            "fixedPosition": false
          },
          "connectionQuery": "connection-jhltkerh",
          "componentType": "wysiwyg.viewer.components.HeaderContainer"
        },
        {
          "type": "Container",
          "styleId": "fc1",
          "id": "SITE_FOOTER",
          "components": [],
          "skin": "wysiwyg.viewer.skins.screenwidthcontainer.TransparentScreen",
          "layout": {
            "width": 980,
            "height": 132,
            "x": 0,
            "y": 1733,
            "scale": 1,
            "rotationInDegrees": 0,
            "fixedPosition": false
          },
          "connectionQuery": "connection-jhltkepd",
          "componentType": "wysiwyg.viewer.components.FooterContainer"
        },
        {
          "type": "Container",
          "styleId": "pc1",
          "id": "PAGES_CONTAINER",
          "components": [
            {
              "type": "Container",
              "id": "SITE_PAGES",
              "components": [],
              "skin": "wysiwyg.viewer.skins.PageGroupSkin",
              "layout": {
                "width": 980,
                "height": 645,
                "x": 0,
                "y": 0,
                "scale": 1,
                "rotationInDegrees": 0,
                "fixedPosition": false
              },
              "propertyQuery": "SITE_PAGES",
              "connectionQuery": "connection-jhltkefp",
              "componentType": "wysiwyg.viewer.components.PageGroup"
            }
          ],
          "skin": "wysiwyg.viewer.skins.screenwidthcontainer.BlankScreen",
          "layout": {
            "width": 980,
            "height": 645,
            "x": 0,
            "y": 0,
            "scale": 1,
            "rotationInDegrees": 0,
            "fixedPosition": false
          },
          "connectionQuery": "connection-jhltkejm",
          "componentType": "wysiwyg.viewer.components.PagesContainer"
        }
      ],
      "mobileComponents": [
        {
          "type": "Container",
          "styleId": "hc1",
          "id": "SITE_HEADER",
          "components": [
            {
              "type": "Component",
              "styleId": "style-jfv0wogk",
              "id": "TINY_MENU",
              "dataQuery": "#TINY_MENU",
              "skin": "wysiwyg.viewer.skins.mobile.TinyMenuFullScreenSkin",
              "layout": {
                "width": 50,
                "height": 50,
                "x": 253,
                "y": 20,
                "scale": 1,
                "rotationInDegrees": 0,
                "fixedPosition": false
              },
              "propertyQuery": "TINY_MENU",
              "connectionQuery": "TINY_MENU_CONNECTION",
              "componentType": "wysiwyg.viewer.components.mobile.TinyMenu"
            }
          ],
          "skin": "wysiwyg.viewer.skins.screenwidthcontainer.TransparentScreen",
          "layout": {
            "width": 320,
            "height": 100,
            "x": 0,
            "y": 0,
            "scale": 1,
            "rotationInDegrees": 0,
            "fixedPosition": false
          },
          "connectionQuery": "connection-jhltkerh",
          "componentType": "wysiwyg.viewer.components.HeaderContainer"
        },
        {
          "type": "Container",
          "styleId": "pc1",
          "id": "PAGES_CONTAINER",
          "components": [
            {
              "type": "Container",
              "id": "SITE_PAGES",
              "components": [],
              "skin": "wysiwyg.viewer.skins.PageGroupSkin",
              "layout": {
                "width": 320,
                "height": 200,
                "x": 0,
                "y": 0,
                "scale": 1,
                "rotationInDegrees": 0,
                "fixedPosition": false
              },
              "propertyQuery": "SITE_PAGES",
              "connectionQuery": "connection-jhltkefp",
              "componentType": "wysiwyg.viewer.components.PageGroup"
            }
          ],
          "skin": "wysiwyg.viewer.skins.screenwidthcontainer.BlankScreen",
          "layout": {
            "width": 320,
            "height": 200,
            "x": 0,
            "y": 100,
            "scale": 1,
            "rotationInDegrees": 0,
            "fixedPosition": false
          },
          "connectionQuery": "connection-jhltkejm",
          "componentType": "wysiwyg.viewer.components.PagesContainer"
        },
        {
          "type": "Container",
          "styleId": "fc1",
          "id": "SITE_FOOTER",
          "components": [],
          "skin": "wysiwyg.viewer.skins.screenwidthcontainer.TransparentScreen",
          "layout": {
            "width": 320,
            "height": 113,
            "x": 0,
            "y": 300,
            "scale": 1,
            "rotationInDegrees": 0,
            "fixedPosition": false
          },
          "connectionQuery": "connection-jhltkepd",
          "componentType": "wysiwyg.viewer.components.FooterContainer"
        },
        {
          "type": "Component",
          "styleId": "",
          "id": "BACK_TO_TOP_BUTTON",
          "skin": "wysiwyg.viewer.skins.backtotopbutton.BackToTopButtonSkin",
          "layout": {
            "width": 0,
            "height": 5,
            "x": 0,
            "y": 0,
            "rotationInDegrees": 0
          },
          "connectionQuery": "connection-jhms6gf1",
          "componentType": "wysiwyg.common.components.backtotopbutton.viewer.BackToTopButton"
        }
      ],
      "modes": {
        "definitions": [],
        "overrides": []
      },
      "layout": {
        "y": 0,
        "rotationInDegrees": 0,
        "anchors": [
          {
            "distance": 0,
            "type": "BOTTOM_TOP",
            "locked": false,
            "targetComponent": "PAGES_CONTAINER"
          }
        ]
      },
      "mobileHintsQuery": "mobileHints-j8u779ne",
      "id": "masterPage",
      "componentType": "mobile.core.components.MasterPage"
    },
    "data": {
      "document_data": {
        "1fti": {
          "type": "PageLink",
          "id": "1fti",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "pageId": "#c1dmp"
        },
        "CUSTOM_MAIN_MENU": {
          "type": "CustomMenu",
          "id": "CUSTOM_MAIN_MENU",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "name": "Custom Main Menu",
          "items": [
            "#bmi23nr",
            "#dataItem-jhn1gius",
            "#dataItem-jhn1iif6"
          ]
        },
        "CUSTOM_MENUS": {
          "type": "CustomMenusCollection",
          "id": "CUSTOM_MENUS",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "menus": [
            "#CUSTOM_MAIN_MENU"
          ]
        },
        "MAIN_MENU": {
          "type": "Menu",
          "id": "MAIN_MENU",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "items": []
        },
        "PAGES_GROUP_COLLECTION": {
          "type": "PagesGroupCollection",
          "id": "PAGES_GROUP_COLLECTION",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "groups": []
        },
        "TINY_MENU": {
          "type": "TinyMenu",
          "id": "TINY_MENU",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          }
        },
        "appPart22zi": {
          "type": "AppPart",
          "id": "appPart22zi",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "appInnerID": "14",
          "appPartName": "a38ae0cf-96a6-4f6f-b261-4ca6a7f33dfb",
          "viewName": "EditPost",
          "appLogicCustomizations": [],
          "appLogicParams": {}
        },
        "appVars_61f33d50-3002-4882-ae86-d319c1a249ab": {
          "type": "AppVars",
          "id": "appVars_61f33d50-3002-4882-ae86-d319c1a249ab",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "appDefId": "61f33d50-3002-4882-ae86-d319c1a249ab",
          "vars": {
            "applicationActiveState": {
              "type": "AppPartParam",
              "value": "false"
            }
          }
        },
        "bmi23nr": {
          "type": "BasicMenuItem",
          "id": "bmi23nr",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "label": "HOME",
          "isVisible": true,
          "isVisibleMobile": true,
          "items": [],
          "link": "#1fti"
        },
        "c1dmp": {
          "type": "Page",
          "id": "c1dmp",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "title": "HOME",
          "hideTitle": true,
          "icon": "",
          "descriptionSEO": "",
          "metaKeywordsSEO": "",
          "pageTitleSEO": "",
          "pageUriSEO": "home",
          "hidePage": false,
          "isMobileLandingPage": false,
          "underConstruction": false,
          "tpaApplicationId": 0,
          "pageSecurity": {
            "requireLogin": false
          },
          "isPopup": false,
          "indexable": true,
          "isLandingPage": false,
          "pageBackgrounds": {
            "desktop": {
              "custom": true,
              "ref": "#c1dmp_iw1yd7y7_bg",
              "isPreset": true
            },
            "mobile": {
              "custom": true,
              "ref": "#customBgImg24ta",
              "isPreset": true,
              "mediaSizing": "viewport"
            }
          },
          "translationData": {
            "uriSEOTranslated": false
          },
          "ignoreBottomBottomAnchors": true
        },
        "c1dmp_iw1yd7y7_bg": {
          "type": "BackgroundMedia",
          "id": "c1dmp_iw1yd7y7_bg",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "2.0",
            "isHidden": false
          },
          "color": "{color_11}",
          "alignType": "top",
          "fittingType": "fill",
          "scrollType": "fixed"
        },
        "customBgImg24ta": {
          "type": "BackgroundMedia",
          "id": "customBgImg24ta",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "2.0",
            "isHidden": false
          },
          "color": "{color_11}",
          "alignType": "top",
          "fittingType": "fill",
          "scrollType": "scroll",
          "colorOverlay": "",
          "colorOverlayOpacity": 0
        },
        "dataItem-jhn1gius": {
          "type": "BasicMenuItem",
          "id": "dataItem-jhn1gius",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "label": "Categories (All)",
          "isVisible": false,
          "isVisibleMobile": false,
          "items": [],
          "link": "#dataItem-jhn1gius1"
        },
        "dataItem-jhn1gius1": {
          "type": "PageLink",
          "id": "dataItem-jhn1gius1",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "pageId": "#mfef0"
        },
        "dataItem-jhn1iif6": {
          "type": "BasicMenuItem",
          "id": "dataItem-jhn1iif6",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "label": "Categories (Title)",
          "isVisible": false,
          "isVisibleMobile": false,
          "items": [],
          "link": "#dataItem-jhn1iif61"
        },
        "dataItem-jhn1iif61": {
          "type": "PageLink",
          "id": "dataItem-jhn1iif61",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "pageId": "#zfwdz"
        },
        "masterPage": {
          "type": "Document",
          "id": "masterPage",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "siteName": "Template Base",
          "mainPage": "#c1dmp",
          "mainPageId": "c1dmp",
          "renderModifiers": {
            "pageAutoShrink": true
          },
          "characterSets": [
            "hebrew",
            "arabic",
            "latin"
          ],
          "usedFonts": [],
          "smSettings": {
            "socialLoginGoogleEnabled": true,
            "socialLoginFacebookEnabled": true
          },
          "ignoreBottomBottomAnchors": true,
          "accessibilitySettings": {
            "visualFocusDisabled": false
          },
          "layoutSettings": {
            "useDesktopSectionsLayout": true,
            "mechanism": "mesh"
          },
          "mobileSettings": {
            "animationsEnabled": true
          }
        },
        "mfef0": {
          "type": "Page",
          "id": "mfef0",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "title": "Categories (All)",
          "hideTitle": true,
          "icon": "",
          "descriptionSEO": "",
          "metaKeywordsSEO": "",
          "pageTitleSEO": "",
          "pageUriSEO": "categories",
          "hidePage": true,
          "isMobileLandingPage": false,
          "underConstruction": false,
          "tpaApplicationId": 0,
          "pageSecurity": {
            "requireLogin": false,
            "passwordDigest": "",
            "dialogLanguage": ""
          },
          "isPopup": false,
          "indexable": false,
          "isLandingPage": true,
          "pageBackgrounds": {
            "desktop": {
              "custom": true,
              "ref": "#mfef0_desktop_bg",
              "isPreset": true
            },
            "mobile": {
              "custom": true,
              "ref": "#mfef0_mobile_bg",
              "isPreset": true,
              "mediaSizing": "viewport"
            }
          },
          "translationData": {
            "uriSEOTranslated": false
          }
        },
        "pst14": {
          "type": "PermaLink",
          "id": "pst14",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "appType": "ListsApps",
          "dataItemRef": "#appPart22zi",
          "mutableSeoTitle": "edit-post"
        },
        "zfwdz": {
          "type": "Page",
          "id": "zfwdz",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "title": "Categories (Title)",
          "hideTitle": true,
          "icon": "",
          "descriptionSEO": "",
          "metaKeywordsSEO": "",
          "pageTitleSEO": "",
          "pageUriSEO": "blank",
          "hidePage": true,
          "isMobileLandingPage": false,
          "underConstruction": false,
          "tpaApplicationId": 0,
          "pageSecurity": {
            "requireLogin": false,
            "passwordDigest": "",
            "dialogLanguage": ""
          },
          "isPopup": false,
          "indexable": false,
          "isLandingPage": true,
          "pageBackgrounds": {
            "desktop": {
              "custom": true,
              "ref": "#zfwdz_desktop_bg",
              "isPreset": true
            },
            "mobile": {
              "custom": true,
              "ref": "#zfwdz_mobile_bg",
              "isPreset": true,
              "mediaSizing": "viewport"
            }
          },
          "translationData": {
            "uriSEOTranslated": false
          }
        },
        "zfwdz_desktop_bg": {
          "type": "BackgroundMedia",
          "id": "zfwdz_desktop_bg",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "2.0",
            "isHidden": false
          },
          "color": "{color_11}",
          "alignType": "top",
          "fittingType": "fill",
          "scrollType": "fixed"
        },
        "zfwdz_mobile_bg": {
          "type": "BackgroundMedia",
          "id": "zfwdz_mobile_bg",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "2.0",
            "isHidden": false
          },
          "color": "{color_11}",
          "alignType": "top",
          "fittingType": "fill",
          "scrollType": "scroll",
          "colorOverlay": "",
          "colorOverlayOpacity": 0
        },
        "mfef0_desktop_bg": {
          "type": "BackgroundMedia",
          "id": "mfef0_desktop_bg",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "2.0",
            "isHidden": false
          },
          "color": "{color_11}",
          "alignType": "top",
          "fittingType": "fill",
          "scrollType": "fixed"
        },
        "mfef0_mobile_bg": {
          "type": "BackgroundMedia",
          "id": "mfef0_mobile_bg",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "2.0",
            "isHidden": false
          },
          "color": "{color_11}",
          "alignType": "top",
          "fittingType": "fill",
          "scrollType": "scroll",
          "colorOverlay": "",
          "colorOverlayOpacity": 0
        }
      },
      "design_data": {},
      "behaviors_data": {},
      "connections_data": {
        "TINY_MENU_CONNECTION": {
          "type": "ConnectionList",
          "id": "TINY_MENU_CONNECTION",
          "items": [
            {
              "type": "WixCodeConnectionItem",
              "role": "mobileMenu1"
            }
          ]
        },
        "connection-jhltkefp": {
          "type": "ConnectionList",
          "id": "connection-jhltkefp",
          "items": [
            {
              "type": "WixCodeConnectionItem",
              "role": "pageGroup1"
            }
          ]
        },
        "connection-jhltkejm": {
          "type": "ConnectionList",
          "id": "connection-jhltkejm",
          "items": [
            {
              "type": "WixCodeConnectionItem",
              "role": "pagesContainer1"
            }
          ]
        },
        "connection-jhltkepd": {
          "type": "ConnectionList",
          "id": "connection-jhltkepd",
          "items": [
            {
              "type": "WixCodeConnectionItem",
              "role": "footer1"
            }
          ]
        },
        "connection-jhltkerh": {
          "type": "ConnectionList",
          "id": "connection-jhltkerh",
          "items": [
            {
              "type": "WixCodeConnectionItem",
              "role": "header1"
            }
          ]
        },
        "connection-jhms6gf1": {
          "type": "ConnectionList",
          "id": "connection-jhms6gf1",
          "items": [
            {
              "type": "WixCodeConnectionItem",
              "role": "backToTop1"
            }
          ]
        }
      },
      "theme_data": {
        "SingleAudioPlayer_1": {
          "type": "TopLevelStyle",
          "id": "SingleAudioPlayer_1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-brd": "1",
              "audioIcons": "color_11",
              "audioText": "color_11",
              "bg": "color_18",
              "boxShadowToggleOn-shd": "false",
              "brd": "color_15",
              "brw": "0",
              "fnt": "font_9",
              "fnts": "font_10",
              "prog": "color_11",
              "rd": "0",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)",
              "vol": "color_11"
            },
            "propertiesSource": {
              "alpha-brd": "value",
              "audioIcons": "theme",
              "bg": "theme",
              "prog": "theme",
              "vol": "theme"
            },
            "groups": {}
          },
          "componentClassName": "wysiwyg.common.components.singleaudioplayer.viewer.SingleAudioPlayer",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.common.components.singleaudioplayer.viewer.skins.SingleAudioPlayerSkin"
        },
        "THEME_DATA": {
          "type": "WFlatTheme",
          "id": "THEME_DATA",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "color": [
            "#FFFFFF",
            "#FFFFFF",
            "#000000",
            "#ED1C24",
            "#0088CB",
            "#FFCB05",
            "#727272",
            "#B0B0B0",
            "#FFFFFF",
            "#727272",
            "#B0B0B0",
            "#FFFFFF",
            "#E8E6E6",
            "#C7C7C7",
            "#999997",
            "#414141",
            "#D9F0FD",
            "#BEE5FB",
            "#7FCCF7",
            "#40667C",
            "#213D4D",
            "#ADC6F8",
            "#83A8F0",
            "#155DE9",
            "#0E3E9B",
            "#071F4E",
            "#C4AEDD",
            "#9C7FBA",
            "#663898",
            "#442565",
            "#221333",
            "#E5FAD1",
            "#CAE5AF",
            "#9BCB6C",
            "#4E6636",
            "#27331B"
          ],
          "siteBg": "none 0px 0px center top cover no-repeat no-repeat fixed {color_11}",
          "mobileBg": "none 0px 0px center top cover no-repeat no-repeat fixed {color_11}",
          "font": [
            "normal normal normal 40px/1.4em proxima-n-w01-reg {color_15}",
            "normal normal normal 16px/1.4em din-next-w01-light {color_14}",
            "normal normal normal 28px/1.4em proxima-n-w01-reg {color_15}",
            "normal normal normal 60px/1.4em proxima-n-w01-reg {color_15}",
            "normal normal normal 40px/1.4em proxima-n-w01-reg {color_15}",
            "normal normal normal 25px/1.4em proxima-n-w01-reg {color_15}",
            "normal normal normal 22px/1.4em proxima-n-w01-reg {color_15}",
            "normal normal normal 17px/1.4em proxima-n-w01-reg {color_15}",
            "normal normal normal 15px/1.4em proxima-n-w01-reg {color_15}",
            "normal normal normal 14px/1.4em proxima-n-w01-reg {color_15}",
            "normal normal normal 12px/1.4em din-next-w01-light {color_14}"
          ],
          "border": [
            "0.15em solid [color_1]",
            "0.25em solid [color_2]",
            "0.35em solid [color_3]"
          ],
          "padding1": "0 0 0 0",
          "padding2": "0.0em 0.5em 0.0em 0.5em",
          "padding3": "1.0em 0.0em 1.0em 0.0em",
          "iconSize": "3.2",
          "bulletSize": "1.5",
          "headerSpacing": "2.25em",
          "componentSpacing": "0.45em",
          "itemSpacing": "0.75em",
          "thumbSpacing": "0.23em",
          "iconSpacing": "0.75em",
          "themePresets": {
            "mobileBg": true
          },
          "THEME_DIRECTORY": "photography",
          "BG_DIRECTORY": "photography",
          "CONTACT_DIRECTORY": "photography/contact",
          "NETWORKS_DIRECTORY": "photography/network",
          "EXTERNAL_LINKS_DIRECTORY": "photography/external",
          "PAGES_DIRECTORY": "photography/pages",
          "WEB_THEME_DIRECTORY": "viewer",
          "BASE_THEME_DIRECTORY": "base"
        },
        "ap1": {
          "type": "TopLevelStyle",
          "id": "ap1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "bg": "color_18",
              "bgh": "color_17",
              "boxShadowToggleOn-shd": "false",
              "brd": "color_15",
              "brdh": "color_15",
              "brw": "0",
              "icon": "color_11",
              "iconh": "color_11",
              "rd": "0",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)"
            },
            "propertiesSource": {
              "bg": "theme",
              "bgh": "theme",
              "icon": "theme",
              "iconh": "theme"
            },
            "groups": {}
          },
          "componentClassName": "wysiwyg.viewer.components.AudioPlayer",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.audioplayer.SimplePlayer"
        },
        "ap2": {
          "type": "TopLevelStyle",
          "id": "ap2",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "bg": "color_18",
              "bgh": "color_17",
              "boxShadowToggleOn-shd": "false",
              "brd": "color_15",
              "brdh": "color_15",
              "brw": "0",
              "icon": "color_11",
              "iconh": "color_11",
              "rd": "0",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)",
              "shd1": "inset 0 1px 4px 1px rgba(0, 0, 0, 0.2)"
            },
            "propertiesSource": {
              "bg": "theme",
              "bgh": "theme",
              "icon": "theme",
              "iconh": "theme"
            },
            "groups": {}
          },
          "componentClassName": "wysiwyg.viewer.components.AudioPlayer",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.audioplayer.ShinyPlayer"
        },
        "app1": {
          "type": "TopLevelStyle",
          "id": "app1",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {},
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "wixapps.integration.components.AppPart2",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.AppPartSkin"
        },
        "b1": {
          "type": "TopLevelStyle",
          "id": "b1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-bgh": "1",
              "alpha-brd": "1",
              "alpha-brdh": "0",
              "alpha-txt": "1",
              "alpha-txth": "1",
              "bg": "color_18",
              "bgh": "color_17",
              "boxShadowToggleOn-shd": "false",
              "brd": "color_14",
              "brdh": "color_12",
              "brw": "0",
              "fnt": "font_8",
              "rd": "0px",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)",
              "txt": "color_8",
              "txth": "color_11"
            },
            "propertiesSource": {
              "alpha-brdh": "value",
              "bg": "theme",
              "bgh": "theme",
              "brd": "theme",
              "brdh": "theme",
              "brw": "value",
              "fnt": "theme",
              "rd": "value",
              "shd": "value",
              "txt": "theme",
              "txth": "theme"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.button.BasicButton"
        },
        "b2": {
          "type": "TopLevelStyle",
          "id": "b2",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-txt": "1",
              "alpha-txth": "1",
              "fnt": "font_8",
              "txt": "color_15",
              "txth": "color_14"
            },
            "propertiesSource": {
              "fnt": "theme",
              "txt": "theme",
              "txth": "theme"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.button.TextOnlyButtonSkin"
        },
        "b3": {
          "type": "TopLevelStyle",
          "id": "b3",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-bgh": "1",
              "alpha-brd": "1",
              "alpha-brdh": "1",
              "alpha-txt": "1",
              "alpha-txth": "1",
              "bg": "color_18",
              "bgh": "color_17",
              "boxShadowToggleOn-shd": "false",
              "brd": "color_12",
              "brdh": "color_14",
              "brw": "0",
              "fnt": "font_8",
              "rd": "0px",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)",
              "txt": "color_11",
              "txth": "color_11"
            },
            "propertiesSource": {
              "bg": "theme",
              "bgh": "theme",
              "brd": "theme",
              "brdh": "theme",
              "brw": "value",
              "fnt": "theme",
              "rd": "value",
              "shd": "value",
              "txt": "theme",
              "txth": "theme"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.button.ShinyButtonISkin"
        },
        "b4": {
          "type": "TopLevelStyle",
          "id": "b4",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-bgh": "1",
              "alpha-brd": "1",
              "alpha-brdh": "1",
              "alpha-txt": "1",
              "alpha-txth": "1",
              "bg": "color_18",
              "bgh": "color_17",
              "brd": "color_11",
              "brdh": "color_11",
              "brw": "0",
              "fnt": "font_8",
              "rd": "5px",
              "txt": "color_11",
              "txth": "color_11"
            },
            "propertiesSource": {
              "bg": "theme",
              "bgh": "theme",
              "brd": "theme",
              "brdh": "theme",
              "brw": "value",
              "fnt": "theme",
              "rd": "value",
              "txt": "theme",
              "txth": "theme"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.button.ButtonThreeD"
        },
        "bgis1": {
          "type": "TopLevelStyle",
          "id": "bgis1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-brd": "1",
              "bg": "color_12",
              "boxShadowToggleOn-shd": "false",
              "brd": "color_15",
              "brwb": "0px",
              "brwt": "0px",
              "shd": "0 0 5px rgba(0, 0, 0, 0.7)"
            },
            "propertiesSource": {
              "bg": "theme",
              "brd": "theme",
              "brwb": "value",
              "brwt": "value",
              "shd": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "skins.viewer.bgimagestrip.BgImageStripSkin"
        },
        "bgis2": {
          "type": "TopLevelStyle",
          "id": "bgis2",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-brd": "1",
              "bg": "color_13",
              "boxShadowToggleOn-shd": "false",
              "brd": "color_15",
              "brwb": "0px",
              "brwt": "0px",
              "shd": "0 0 5px rgba(0, 0, 0, 0.7)"
            },
            "propertiesSource": {
              "bg": "theme",
              "brd": "theme",
              "brwb": "value",
              "brwt": "value",
              "shd": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "skins.viewer.bgimagestrip.BgImageStripSkin"
        },
        "bgis3": {
          "type": "TopLevelStyle",
          "id": "bgis3",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-brd": "1",
              "bg": "color_14",
              "boxShadowToggleOn-shd": "false",
              "brd": "color_15",
              "brwb": "0px",
              "brwt": "0px",
              "shd": "0 0 5px rgba(0, 0, 0, 0.7)"
            },
            "propertiesSource": {
              "bg": "theme",
              "brd": "theme",
              "brwb": "value",
              "brwt": "value",
              "shd": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "skins.viewer.bgimagestrip.BgImageStripSkin"
        },
        "bgis4": {
          "type": "TopLevelStyle",
          "id": "bgis4",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-brd": "1",
              "bg": "color_15",
              "boxShadowToggleOn-shd": "false",
              "brd": "color_15",
              "brwb": "0px",
              "brwt": "0px",
              "shd": "0 0 5px rgba(0, 0, 0, 0.7)"
            },
            "propertiesSource": {
              "bg": "theme",
              "brd": "theme",
              "brwb": "value",
              "brwt": "value",
              "shd": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "skins.viewer.bgimagestrip.BgImageStripSkin"
        },
        "blog_33a9f5e0-b083-4ccc-b55d-3ca5d241a6eb_1": {
          "type": "TopLevelStyle",
          "id": "blog_33a9f5e0-b083-4ccc-b55d-3ca5d241a6eb_1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "rd": "7px"
            },
            "propertiesSource": {
              "rd": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.AppPartSkin"
        },
        "blog_4656a63c-b316-4315-ab16-e2003f5935ca_1": {
          "type": "TopLevelStyle",
          "id": "blog_4656a63c-b316-4315-ab16-e2003f5935ca_1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "rd": "7px"
            },
            "propertiesSource": {
              "rd": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.AppPartSkin"
        },
        "blog_4de5abc5-6da2-4f97-acc3-94bb74285072_1": {
          "type": "TopLevelStyle",
          "id": "blog_4de5abc5-6da2-4f97-acc3-94bb74285072_1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "rd": "7px"
            },
            "propertiesSource": {
              "rd": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.AppPartSkin"
        },
        "blog_56ab6fa4-95ac-4391-9337-6702b8a77011_1": {
          "type": "TopLevelStyle",
          "id": "blog_56ab6fa4-95ac-4391-9337-6702b8a77011_1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "rd": "7px"
            },
            "propertiesSource": {
              "rd": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.AppPartSkin"
        },
        "blog_e000b4bf-9ff1-4e66-a0d3-d4b365ba3af5_1": {
          "type": "TopLevelStyle",
          "id": "blog_e000b4bf-9ff1-4e66-a0d3-d4b365ba3af5_1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "rd": "7px"
            },
            "propertiesSource": {
              "rd": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.AppPartSkin"
        },
        "blog_f72fe377-8abc-40f2-8656-89cfe00f3a22_1": {
          "type": "TopLevelStyle",
          "id": "blog_f72fe377-8abc-40f2-8656-89cfe00f3a22_1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "rd": "7px"
            },
            "propertiesSource": {
              "rd": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.AppPartSkin"
        },
        "c1": {
          "type": "TopLevelStyle",
          "id": "c1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-brd": "1",
              "bg": "color_11",
              "boxShadowToggleOn-shd": "false",
              "brd": "color_15",
              "brw": "0",
              "rd": "0px",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)"
            },
            "propertiesSource": {
              "bg": "theme",
              "brd": "theme",
              "brw": "value",
              "rd": "value",
              "shd": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.area.DefaultAreaSkin"
        },
        "c2": {
          "type": "TopLevelStyle",
          "id": "c2",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-brd": "1",
              "bg": "color_15",
              "boxShadowToggleOn-shd": "false",
              "brd": "color_14",
              "brw": "0px",
              "rd": "0px",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)"
            },
            "propertiesSource": {
              "bg": "theme",
              "brd": "theme",
              "brw": "value",
              "rd": "value",
              "shd": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.area.DefaultAreaSkin"
        },
        "c3": {
          "type": "TopLevelStyle",
          "id": "c3",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "bg": "color_18"
            },
            "propertiesSource": {
              "bg": "theme"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.area.RectangleArea"
        },
        "c4": {
          "type": "TopLevelStyle",
          "id": "c4",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "bg": "color_28"
            },
            "propertiesSource": {
              "bg": "theme"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.area.RectangleArea"
        },
        "ca1": {
          "type": "TopLevelStyle",
          "id": "ca1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {},
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.photo.NoSkinPhoto"
        },
        "cf1": {
          "type": "TopLevelStyle",
          "id": "cf1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg1": "1",
              "alpha-bg2": "1",
              "alpha-brd": "1",
              "alpha-labelTxt": "1",
              "alpha-txt1": "1",
              "alpha-txt2": "1",
              "alpha-txtError": "1",
              "alpha-txtSuccess": "1",
              "bg1": "color_11",
              "bg2": "color_18",
              "boxShadowToggleOn-shd": "false",
              "brd": "color_15",
              "brw": "1px",
              "fnt": "font_8",
              "fnt2": "font_8",
              "labelTxt": "color_15",
              "rd": "0px",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)",
              "txt1": "color_15",
              "txt2": "color_11",
              "txtError": "rgba(139,0,0,1)",
              "txtSuccess": "rgba(186,218,85,1)"
            },
            "propertiesSource": {
              "bg1": "theme",
              "bg2": "theme",
              "brd": "theme",
              "brw": "value",
              "fnt": "theme",
              "fnt2": "theme",
              "labelTxt": "theme",
              "rd": "value",
              "shd": "value",
              "txt1": "theme",
              "txt2": "theme",
              "txtError": "value",
              "txtSuccess": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.contactform.DefaultContactForm"
        },
        "cf2": {
          "type": "TopLevelStyle",
          "id": "cf2",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg1": "1",
              "alpha-bg2": "1",
              "alpha-brd": "1",
              "alpha-labelTxt": "1",
              "alpha-txt1": "1",
              "alpha-txt2": "1",
              "alpha-txtError": "1",
              "alpha-txtSuccess": "1",
              "bg1": "color_11",
              "bg2": "color_18",
              "boxShadowToggleOn-shd": "false",
              "brd": "color_15",
              "brw": "1px",
              "fnt": "font_7",
              "fnt2": "font_7",
              "labelTxt": "color_15",
              "rd": "0px",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)",
              "txt1": "color_15",
              "txt2": "color_11",
              "txtError": "rgba(139,0,0,1)",
              "txtSuccess": "rgba(186,218,85,1)"
            },
            "propertiesSource": {
              "bg1": "theme",
              "bg2": "theme",
              "brd": "theme",
              "brw": "value",
              "fnt": "theme",
              "fnt2": "theme",
              "labelTxt": "theme",
              "rd": "value",
              "shd": "value",
              "txt1": "theme",
              "txt2": "theme",
              "txtError": "value",
              "txtSuccess": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.contactform.BasicContactFormSkin"
        },
        "controller1": {
          "type": "TopLevelStyle",
          "id": "controller1",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {},
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "platform.components.AppController",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "platform.components.skins.controllerSkin"
        },
        "ddm1": {
          "type": "TopLevelStyle",
          "id": "ddm1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bgDrop": "1",
              "alpha-txt": "1",
              "alpha-txth": "1",
              "alpha-txts": "1",
              "bgDrop": "color_11",
              "boxShadowToggleOn-shd": "false",
              "fnt": "normal normal normal 16px/1.4em proxima-n-w01-reg",
              "pad": "5px",
              "rd": "0px",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)",
              "txt": "color_15",
              "txth": "color_18",
              "txts": "color_18"
            },
            "propertiesSource": {
              "bgDrop": "theme",
              "fnt": "value",
              "pad": "value",
              "rd": "value",
              "shd": "value",
              "txt": "theme",
              "txth": "theme",
              "txts": "theme"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.common.components.dropdownmenu.viewer.skins.TextOnlyMenuButtonSkin"
        },
        "ddm2": {
          "type": "TopLevelStyle",
          "id": "ddm2",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-bgDrop": "1",
              "alpha-bgh": "1",
              "alpha-bgs": "1",
              "alpha-brd": "1",
              "alpha-sep": "1",
              "alpha-txt": "1",
              "alpha-txth": "1",
              "alpha-txts": "1",
              "bg": "color_11",
              "bgDrop": "color_11",
              "bgh": "color_18",
              "bgs": "color_18",
              "boxShadowToggleOn-shd": "false",
              "brd": "color_11",
              "brw": "0px",
              "fnt": "normal normal normal 16px/1.4em proxima-n-w01-reg",
              "pad": "5px",
              "rd": "0px",
              "rdDrop": "0px",
              "sep": "color_15",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)",
              "txt": "color_15",
              "txth": "color_11",
              "txts": "color_11"
            },
            "propertiesSource": {
              "alpha-bg": "value",
              "bg": "theme",
              "bgDrop": "theme",
              "bgh": "theme",
              "bgs": "theme",
              "brd": "theme",
              "brw": "value",
              "fnt": "value",
              "pad": "value",
              "rd": "value",
              "rdDrop": "value",
              "sep": "theme",
              "shd": "value",
              "txt": "theme",
              "txth": "theme",
              "txts": "theme"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.common.components.dropdownmenu.viewer.skins.SolidColorMenuButtonSkin"
        },
        "ddm3": {
          "type": "TopLevelStyle",
          "id": "ddm3",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bgDrop": "1",
              "alpha-brd": "1",
              "alpha-brdh": "1",
              "alpha-brds": "1",
              "bgDrop": "color_11",
              "boxShadowToggleOn-shd": "false",
              "brd": "color_15",
              "brdh": "color_18",
              "brds": "color_18",
              "fnt": "normal normal normal 16px/1.4em proxima-n-w01-reg",
              "menuTotalBordersX": "0",
              "pad": "5px",
              "rd": "0px",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)",
              "txt": "color_15",
              "txth": "color_18",
              "txts": "color_18"
            },
            "propertiesSource": {
              "alpha-bgDrop": "value",
              "alpha-brd": "value",
              "alpha-brdh": "value",
              "alpha-brds": "value",
              "bgDrop": "theme",
              "boxShadowToggleOn-shd": "value",
              "brd": "theme",
              "brdh": "theme",
              "brds": "theme",
              "fnt": "value",
              "menuTotalBordersX": "value",
              "pad": "value",
              "rd": "value",
              "shd": "value",
              "txt": "theme",
              "txth": "theme",
              "txts": "theme"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.common.components.dropdownmenu.viewer.skins.OverlineMenuButtonSkin"
        },
        "eib1": {
          "type": "TopLevelStyle",
          "id": "eib1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-backgroundColor": "1",
              "alpha-borderColor": "1",
              "alpha-fontColor": "1",
              "alpha-headerColor": "1",
              "alpha-linkColor": "1",
              "backgroundColor": "color_1",
              "borderColor": "color_4",
              "brightness-backgroundColor": "0",
              "brightness-borderColor": "0",
              "brightness-fontColor": "0",
              "brightness-headerColor": "0",
              "brightness-linkColor": "0",
              "fontColor": "color_9",
              "headerColor": "color_5",
              "linkColor": "color_2",
              "saturation-backgroundColor": "0",
              "saturation-borderColor": "0",
              "saturation-fontColor": "0",
              "saturation-headerColor": "0",
              "saturation-linkColor": "0"
            }
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.EbayItemsBySellerSkin"
        },
        "fbc1": {
          "type": "TopLevelStyle",
          "id": "fbc1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {},
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "skins.core.FacebookCommentSkin"
        },
        "fbl1": {
          "type": "TopLevelStyle",
          "id": "fbl1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {},
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "skins.core.FacebookLikeSkin"
        },
        "fc1": {
          "type": "TopLevelStyle",
          "id": "fc1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {},
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.screenwidthcontainer.TransparentScreen"
        },
        "fc2": {
          "type": "TopLevelStyle",
          "id": "fc2",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-bgctr": "1",
              "alpha-brd": "1",
              "bg": "color_13",
              "bgctr": "color_13",
              "boxShadowToggleOn-shd": "false",
              "brd": "color_14",
              "brwb": "0px",
              "brwt": "5px",
              "rd": "0",
              "shd": "0 0 5px rgba(0, 0, 0, 0.7)"
            },
            "propertiesSource": {
              "bg": "theme",
              "bgctr": "theme",
              "brd": "theme",
              "brwb": "value",
              "brwt": "value",
              "rd": "value",
              "shd": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.screenwidthcontainer.DefaultScreen"
        },
        "fc3": {
          "type": "TopLevelStyle",
          "id": "fc3",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "0",
              "alpha-bgctr": "1",
              "alpha-brd": "1",
              "bg": "color_12",
              "bgctr": "color_13",
              "boxShadowToggleOn-shd": "false",
              "brd": "color_13",
              "brwb": "0px",
              "brwt": "0px",
              "rd": "0px",
              "shd": "0 0 5px rgba(0, 0, 0, 0.7)"
            },
            "propertiesSource": {
              "bg": "theme",
              "bgctr": "theme",
              "brd": "theme",
              "brwb": "value",
              "brwt": "value",
              "rd": "value",
              "shd": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.screenwidthcontainer.DefaultScreen"
        },
        "fk1": {
          "type": "TopLevelStyle",
          "id": "fk1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-backgroundColor": "0",
              "alpha-borderColor": "0",
              "backgroundColor": "color_6",
              "borderColor": "color_1",
              "brightness-backgroundColor": "0",
              "brightness-borderColor": "0",
              "saturation-backgroundColor": "0",
              "saturation-borderColor": "0"
            }
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.FlickrBadgeWidgetSkin"
        },
        "gm1": {
          "type": "TopLevelStyle",
          "id": "gm1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {},
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.GoogleMapSkin"
        },
        "gp1": {
          "type": "TopLevelStyle",
          "id": "gp1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {},
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "skins.core.GooglePlusOneSkin"
        },
        "hc1": {
          "type": "TopLevelStyle",
          "id": "hc1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {},
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.screenwidthcontainer.TransparentScreen"
        },
        "hc2": {
          "type": "TopLevelStyle",
          "id": "hc2",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-bgctr": "1",
              "alpha-brd": "1",
              "bg": "color_11",
              "bgctr": "color_11",
              "boxShadowToggleOn-shd": "false",
              "brd": "color_13",
              "brwb": "5px",
              "brwt": "0px",
              "rd": "0",
              "shd": "0 0 5px rgba(0, 0, 0, 0.7)"
            },
            "propertiesSource": {
              "bg": "theme",
              "bgctr": "theme",
              "brd": "theme",
              "brwb": "value",
              "brwt": "value",
              "rd": "value",
              "shd": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.screenwidthcontainer.DefaultScreen"
        },
        "hc3": {
          "type": "TopLevelStyle",
          "id": "hc3",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-bgctr": "1",
              "alpha-brd": "1",
              "bg": "color_12",
              "bgctr": "color_12",
              "boxShadowToggleOn-shd": "false",
              "brd": "color_12",
              "brwb": "0px",
              "brwt": "0px",
              "rd": "0",
              "shd": "0 0 5px rgba(0, 0, 0, 0.7)"
            },
            "propertiesSource": {
              "bg": "theme",
              "bgctr": "theme",
              "brd": "theme",
              "brwb": "value",
              "brwt": "value",
              "rd": "value",
              "shd": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.screenwidthcontainer.DefaultScreen"
        },
        "hl1": {
          "type": "TopLevelStyle",
          "id": "hl1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-brd": "1",
              "brd": "color_13",
              "lnw": "1px"
            },
            "propertiesSource": {
              "brd": "theme",
              "lnw": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.line.SolidLine"
        },
        "hl2": {
          "type": "TopLevelStyle",
          "id": "hl2",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-brd": "1",
              "brd": "color_14",
              "lnw": "1px"
            },
            "propertiesSource": {
              "brd": "theme",
              "lnw": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.line.SolidLine"
        },
        "hl3": {
          "type": "TopLevelStyle",
          "id": "hl3",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-brd": "1",
              "brd": "color_15",
              "lnw": "3"
            },
            "propertiesSource": {
              "brd": "theme",
              "lnw": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.line.SolidLine"
        },
        "hl4": {
          "type": "TopLevelStyle",
          "id": "hl4",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {},
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.line.NotchDashedLine"
        },
        "htco1": {
          "type": "TopLevelStyle",
          "id": "htco1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {},
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.HtmlComponentSkin"
        },
        "lb1": {
          "type": "TopLevelStyle",
          "id": "lb1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "groups": {
              "displayer": {}
            }
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.LinkBarNoBGSkin"
        },
        "lgn0": {
          "type": "TopLevelStyle",
          "id": "lgn0",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "fnt": "font_7",
              "txt": "color_15",
              "txth": "color_14"
            },
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "wysiwyg.viewer.components.LoginButton",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.button.LoginButtonSkin"
        },
        "mg1": {
          "type": "TopLevelStyle",
          "id": "mg1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bgh": "0.8",
              "alpha-brd": "1",
              "alpha-ttl": "1",
              "alpha-txt": "1",
              "bgh": "color_11",
              "boxShadowToggleOn-shd": "false",
              "brd": "color_13",
              "brw": "5px",
              "fntds": "font_8",
              "fntt": "font_6",
              "rd": "0px",
              "shd": "0 1px 4px rgba(0, 0, 0, 0.6);",
              "ttl": "color_14",
              "txt": "color_14"
            },
            "propertiesSource": {
              "bgh": "theme",
              "brd": "theme",
              "brw": "value",
              "fntds": "theme",
              "fntt": "theme",
              "rd": "value",
              "shd": "value",
              "ttl": "theme",
              "txt": "theme"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.gallerymatrix.MatrixGalleryDefaultSkin"
        },
        "mg2": {
          "type": "TopLevelStyle",
          "id": "mg2",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bgh": "0.95",
              "alpha-brd": "1",
              "alpha-ttl": "1",
              "alpha-txt": "1",
              "bgh": "color_11",
              "boxShadowToggleOn-shd": "false",
              "brd": "color_11",
              "brw": "0px",
              "fntds": "font_9",
              "fntt": "font_8",
              "rd": "0px",
              "shd": "0 1px 4px rgba(0, 0, 0, 0.6);",
              "ttl": "color_14",
              "txt": "color_14"
            },
            "propertiesSource": {
              "bgh": "theme",
              "brd": "theme",
              "brw": "value",
              "fntds": "theme",
              "fntt": "theme",
              "rd": "value",
              "shd": "value",
              "ttl": "theme",
              "txt": "theme"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.gallerymatrix.MatrixGalleryDefaultSkin"
        },
        "mg3": {
          "type": "TopLevelStyle",
          "id": "mg3",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-bgh": "0.7",
              "alpha-ttl": "1",
              "alpha-txt": "1",
              "bg": "color_13",
              "bgh": "color_11",
              "boxShadowToggleOn-shd": "false",
              "brw": "5px",
              "fntds": "font_8",
              "fntt": "font_6",
              "rd": "0px",
              "shd": "0 1px 4px rgba(0, 0, 0, 0.6);",
              "ttl": "color_11",
              "txt": "color_11"
            },
            "propertiesSource": {
              "bg": "theme",
              "bgh": "theme",
              "brw": "value",
              "fntds": "theme",
              "fntt": "theme",
              "rd": "value",
              "shd": "value",
              "ttl": "theme",
              "txt": "theme"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.gallerymatrix.MatrixGalleryPolaroidSkin"
        },
        "p1": {
          "type": "TopLevelStyle",
          "id": "p1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {},
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.page.TransparentPageSkin"
        },
        "p2": {
          "type": "TopLevelStyle",
          "id": "p2",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "bg": "color_11"
            },
            "propertiesSource": {
              "bg": "theme"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.page.BasicPageSkin"
        },
        "p3": {
          "type": "TopLevelStyle",
          "id": "p3",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "bg": "color_16"
            },
            "propertiesSource": {
              "bg": "theme"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.page.BasicPageSkin"
        },
        "pagg1": {
          "type": "TopLevelStyle",
          "id": "pagg1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "0.8",
              "alpha-bgh": "1",
              "alpha-linkColor": "1",
              "alpha-txt": "1",
              "bg": "color_11",
              "bgh": "color_12",
              "fntds": "font_8",
              "fntt": "font_6",
              "linkColor": "color_15",
              "txt": "color_15"
            },
            "propertiesSource": {
              "bg": "theme",
              "bgh": "theme",
              "fntds": "theme",
              "fntt": "theme",
              "linkColor": "theme",
              "txt": "theme"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.paginatedgrid.PaginatedGridOverlay"
        },
        "pagg2": {
          "type": "TopLevelStyle",
          "id": "pagg2",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "0.8",
              "alpha-linkColor": "1",
              "alpha-txt": "1",
              "bg": "color_11",
              "fntds": "font_8",
              "fntt": "font_6",
              "linkColor": "color_15",
              "txt": "color_15"
            },
            "propertiesSource": {
              "bg": "theme",
              "fntds": "theme",
              "fntt": "theme",
              "linkColor": "theme",
              "txt": "theme"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.paginatedgrid.PaginatedGridArrowsOutside"
        },
        "pagg3": {
          "type": "TopLevelStyle",
          "id": "pagg3",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "0.6",
              "alpha-bg1": "1",
              "alpha-linkColor": "1",
              "alpha-txt": "1",
              "bg": "color_12",
              "bg1": "color_13",
              "fntds": "font_8",
              "fntt": "font_6",
              "linkColor": "color_15",
              "txt": "color_15"
            },
            "propertiesSource": {
              "bg": "theme",
              "bg1": "theme",
              "fntds": "theme",
              "fntt": "theme",
              "linkColor": "theme",
              "txt": "theme"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.paginatedgrid.PaginatedGridRibbonArrows"
        },
        "pc1": {
          "type": "TopLevelStyle",
          "id": "pc1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {},
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.screenwidthcontainer.BlankScreen"
        },
        "pc2": {
          "type": "TopLevelStyle",
          "id": "pc2",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-bgctr": "1",
              "alpha-brd": "1",
              "bg": "color_11",
              "bgctr": "color_11",
              "boxShadowToggleOn-shd": "true",
              "brd": "color_15",
              "brwb": "0px",
              "brwt": "0px",
              "shd": "0 0 5px rgba(0, 0, 0, 0.7)"
            }
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.screenwidthcontainer.DefaultScreen"
        },
        "sc1": {
          "type": "TopLevelStyle",
          "id": "sc1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-bgctr": "1",
              "alpha-brd": "1",
              "bg": "color_15",
              "bgctr": "color_15",
              "boxShadowToggleOn-shd": "false",
              "brd": "color_14",
              "brwb": "0px",
              "brwt": "0px",
              "shd": "0 0 5px rgba(0, 0, 0, 0.7)"
            }
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.screenwidthcontainer.DefaultScreen"
        },
        "sc2": {
          "type": "TopLevelStyle",
          "id": "sc2",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-bgctr": "1",
              "alpha-brd": "1",
              "bg": "color_11",
              "bgctr": "color_11",
              "boxShadowToggleOn-shd": "true",
              "brd": "color_14",
              "brwb": "0px",
              "brwt": "0px",
              "shd": "0 0 5px rgba(0, 0, 0, 0.7)"
            }
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.screenwidthcontainer.DefaultScreen"
        },
        "sc3": {
          "type": "TopLevelStyle",
          "id": "sc3",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-brd": "1",
              "bg": "color_10",
              "brd": "color_14",
              "brwb": "0px",
              "brwt": "0px"
            }
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.screenwidthcontainer.BevelScreen"
        },
        "sc4": {
          "type": "TopLevelStyle",
          "id": "sc4",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-bgctr": "1",
              "alpha-brd": "1",
              "bg": "color_10",
              "bgctr": "color_10",
              "boxShadowToggleOn-shd": "false",
              "brd": "color_12",
              "brwb": "2px",
              "brwt": "2px",
              "shd": "0 0 5px rgba(0, 0, 0, 0.7)"
            }
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.screenwidthcontainer.DefaultScreen"
        },
        "scw1": {
          "type": "TopLevelStyle",
          "id": "scw1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {},
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.SoundCloudWidgetSkin"
        },
        "sg1": {
          "type": "TopLevelStyle",
          "id": "sg1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "0.6",
              "alpha-brd": "1",
              "alpha-txt": "1",
              "bg": "color_12",
              "brd": "color_6",
              "brw": "5px",
              "fntds": "font_8",
              "rd": "0px",
              "txt": "color_15"
            },
            "propertiesSource": {
              "bg": "theme",
              "brd": "theme",
              "brw": "value",
              "fntds": "theme",
              "rd": "value",
              "txt": "theme"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.galleryslider.SliderGalleryDefaultSkin"
        },
        "sg2": {
          "type": "TopLevelStyle",
          "id": "sg2",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "0.6",
              "alpha-brd": "1",
              "alpha-txt": "1",
              "bg": "color_12",
              "brd": "color_14",
              "brw": "0px",
              "fntds": "font_8",
              "rd": "0px",
              "txt": "color_15"
            },
            "propertiesSource": {
              "bg": "theme",
              "brd": "theme",
              "brw": "value",
              "fntds": "theme",
              "rd": "value",
              "txt": "theme"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.galleryslider.SliderGalleryDefaultSkin"
        },
        "sg3": {
          "type": "TopLevelStyle",
          "id": "sg3",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "0.6",
              "alpha-brd": "1",
              "alpha-txt": "1",
              "bg": "color_11",
              "brd": "color_12",
              "brw": "10px",
              "fntds": "font_8",
              "rd": "0px",
              "txt": "color_14"
            },
            "propertiesSource": {
              "bg": "theme",
              "brd": "theme",
              "brw": "value",
              "fntds": "theme",
              "rd": "value",
              "txt": "theme"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.galleryslider.SliderGalleryNoArrow"
        },
        "ssg1": {
          "type": "TopLevelStyle",
          "id": "ssg1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "0.7",
              "alpha-brd": "1",
              "alpha-txt": "1",
              "bg": "color_11",
              "boxShadowToggleOn-shd": "false",
              "brd": "color_13",
              "brw": "5px",
              "fntds": "font_8",
              "fntt": "font_6",
              "rd": "0px",
              "shd": "0 1px 3px rgba(0, 0, 0, 0.5);",
              "txt": "color_15"
            },
            "propertiesSource": {
              "bg": "theme",
              "brd": "theme",
              "brw": "value",
              "fntds": "theme",
              "fntt": "theme",
              "rd": "value",
              "shd": "value",
              "txt": "theme"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.gallery.SlideShowTextOverlay"
        },
        "ssg2": {
          "type": "TopLevelStyle",
          "id": "ssg2",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "0.8",
              "alpha-brd": "1",
              "alpha-txt": "1",
              "bg": "color_11",
              "boxShadowToggleOn-shd": "false",
              "brd": "color_11",
              "brw": "0px",
              "fntds": "font_8",
              "fntt": "font_6",
              "rd": "0px",
              "shd": "0px 1px 3px 0px rgba(0,0,0,0.5)",
              "txt": "color_14"
            },
            "propertiesSource": {
              "bg": "theme",
              "brd": "theme",
              "brw": "value",
              "fntds": "theme",
              "fntt": "theme",
              "rd": "value",
              "shd": "value",
              "txt": "theme"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.gallery.SlideShowTextOverlay"
        },
        "ssg3": {
          "type": "TopLevelStyle",
          "id": "ssg3",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-txt": "1",
              "bg": "color_12",
              "boxShadowToggleOn-shd": "false",
              "brw": "5px",
              "fntds": "font_8",
              "fntt": "font_6",
              "rd": "0px",
              "shd": "0px 1px 3px 0px rgba(0,0,0,0.5)",
              "txt": "color_15"
            },
            "propertiesSource": {
              "bg": "theme",
              "brw": "value",
              "fntds": "theme",
              "fntt": "theme",
              "rd": "value",
              "shd": "value",
              "txt": "theme"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.gallery.SlideShowPolaroid"
        },
        "style-jfv0wogk": {
          "type": "TopLevelStyle",
          "id": "style-jfv0wogk",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "0",
              "alpha-bgDrop": "1",
              "alpha-bgOpen": "0",
              "alpha-borderColorSelected": "1",
              "alpha-bordercolor": "1",
              "alpha-iconcolor": "1",
              "alpha-iconcolorSelected": "1",
              "alpha-separatorColor": "0.5",
              "bg": "color_14",
              "bgDrop": "color_12",
              "bgOpen": "color_14",
              "borderColorSelected": "color_11",
              "borderWidthSelected": "0px",
              "bordercolor": "color_11",
              "borderwidth": "0",
              "fnt": "normal normal normal 16px/1.4em proxima-n-w01-reg",
              "iconcolor": "color_15",
              "iconcolorSelected": "color_15",
              "linewidth": "20px",
              "rd": "4px",
              "separatorColor": "color_15",
              "separatorHeight": "1px",
              "separatorWidthFull": "160",
              "strokewidth": "3",
              "textAlignment": "center",
              "txt": "color_15",
              "txts": "color_18"
            },
            "propertiesSource": {
              "alpha-bg": "value",
              "alpha-bgDrop": "value",
              "alpha-bgOpen": "value",
              "alpha-borderColorSelected": "value",
              "alpha-bordercolor": "value",
              "alpha-iconcolor": "value",
              "alpha-iconcolorSelected": "value",
              "alpha-separatorColor": "value",
              "bg": "theme",
              "bgDrop": "theme",
              "bgOpen": "value",
              "borderColorSelected": "theme",
              "borderWidthSelected": "value",
              "bordercolor": "theme",
              "borderwidth": "value",
              "fnt": "value",
              "iconcolor": "theme",
              "iconcolorSelected": "theme",
              "linewidth": "value",
              "rd": "value",
              "separatorColor": "theme",
              "separatorHeight": "value",
              "separatorWidthFull": "value",
              "strokewidth": "value",
              "textAlignment": "value",
              "txt": "theme",
              "txts": "theme"
            },
            "groups": {}
          },
          "componentClassName": "wysiwyg.viewer.components.mobile.TinyMenu",
          "pageId": "",
          "compId": "",
          "styleType": "custom",
          "skin": "wysiwyg.viewer.skins.mobile.TinyMenuFullScreenSkin"
        },
        "style-jhlti7r0": {
          "type": "TopLevelStyle",
          "id": "style-jhlti7r0",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-param_color_backColor": "1",
              "alpha-param_color_bgColorExpand": "1",
              "alpha-param_color_descriptionColorExpand": "1",
              "alpha-param_color_foreColor": "1",
              "alpha-param_color_itemDescriptionFontColor": "1",
              "alpha-param_color_itemDescriptionFontColorSlideshow": "1",
              "alpha-param_color_itemFontColor": "1",
              "alpha-param_color_itemFontColorSlideshow": "1",
              "alpha-param_color_itemIconColor": "1",
              "alpha-param_color_itemOpacity": "0.6",
              "alpha-param_color_loadMoreButtonBorderColor": "1",
              "alpha-param_color_loadMoreButtonColor": "1",
              "alpha-param_color_loadMoreButtonFontColor": "1",
              "alpha-param_color_te-background-color-picker": "1",
              "alpha-param_color_titleColorExpand": "1",
              "param_boolean_addPanel": "true",
              "param_boolean_allowTitle": "true",
              "param_boolean_dummyBooly": "true",
              "param_color_backColor": "color_12",
              "param_color_bgColorExpand": "color_11",
              "param_color_descriptionColorExpand": "color_15",
              "param_color_foreColor": "color_12",
              "param_color_itemDescriptionFontColor": "color_11",
              "param_color_itemDescriptionFontColorSlideshow": "color_15",
              "param_color_itemFontColor": "color_11",
              "param_color_itemFontColorSlideshow": "color_15",
              "param_color_itemIconColor": "color_11",
              "param_color_itemOpacity": "color_15",
              "param_color_loadMoreButtonBorderColor": "color_15",
              "param_color_loadMoreButtonColor": "color_11",
              "param_color_loadMoreButtonFontColor": "color_15",
              "param_color_te-background-color-picker": "rgba(119,167,191,1)",
              "param_color_titleColorExpand": "color_15",
              "param_font_descriptionFontExpand": "{\"style\":{\"italic\":false,\"bold\":false,\"underline\":false},\"family\":\"din-next-w01-light\",\"preset\":\"Page-title\",\"editorKey\":\"font_2\",\"size\":\"25px\",\"displayName\":\"Page Title\",\"fontStyleParam\":true}",
              "param_font_itemDescriptionFont": "{\"family\":\"din-next-w01-light\",\"displayName\":\"Paragraph 2\",\"style\":{\"bold\":false,\"italic\":false,\"underline\":false},\"size\":\"15\",\"preset\":\"Body-M\",\"editorKey\":\"font_8\",\"fontStyleParam\":true}",
              "param_font_itemDescriptionFontSlideshow": "{\"family\":\"din-next-w01-light\",\"displayName\":\"Paragraph 2\",\"style\":{\"bold\":false,\"italic\":false,\"underline\":false},\"size\":\"15\",\"preset\":\"Body-M\",\"editorKey\":\"font_8\",\"fontStyleParam\":true}",
              "param_font_itemFont": "{\"style\":{\"bold\":false,\"italic\":false,\"underline\":false},\"family\":\"din-next-w01-light\",\"preset\":\"Heading-M\",\"editorKey\":\"font_5\",\"size\":\"25px\",\"fontStyleParam\":true,\"displayName\":\"Basic Heading\"}",
              "param_font_itemFontSlideshow": "{\"family\":\"din-next-w01-light\",\"displayName\":\"Basic Heading\",\"style\":{\"bold\":false,\"italic\":false,\"underline\":false},\"size\":\"25\",\"preset\":\"Heading-M\",\"editorKey\":\"font_5\",\"fontStyleParam\":true}",
              "param_font_loadMoreButtonFont": "{\"family\":\"din-next-w01-light\",\"displayName\":\"Paragraph 2\",\"style\":{\"bold\":false,\"italic\":false,\"underline\":false},\"size\":\"15\",\"preset\":\"Body-M\",\"editorKey\":\"font_8\",\"fontStyleParam\":true}",
              "param_font_loadMoreButtonText": "\"Load more\"",
              "param_font_text-editor-font": "{\"style\":{\"italic\":false,\"bold\":false,\"underline\":false},\"family\":\"raleway\",\"preset\":\"Custom\",\"editorKey\":\"font_2\",\"size\":39,\"fontStyleParam\":true}",
              "param_font_titleFontExpand": "{\"style\":{\"italic\":false,\"bold\":false,\"underline\":false},\"family\":\"din-next-w01-light\",\"preset\":\"Page-title\",\"editorKey\":\"font_2\",\"size\":\"25px\",\"displayName\":\"Page Title\",\"fontStyleParam\":true}",
              "param_number_collageDensity": "80",
              "param_number_galleryLayout": "0",
              "param_number_gallerySize": "30",
              "param_number_te-padding-slider": "30"
            },
            "propertiesSource": {
              "param_boolean_addPanel": "value",
              "param_boolean_allowTitle": "value",
              "param_boolean_dummyBooly": "value",
              "param_color_backColor": "theme",
              "param_color_bgColorExpand": "theme",
              "param_color_descriptionColorExpand": "theme",
              "param_color_foreColor": "theme",
              "param_color_itemDescriptionFontColor": "theme",
              "param_color_itemDescriptionFontColorSlideshow": "theme",
              "param_color_itemFontColor": "theme",
              "param_color_itemFontColorSlideshow": "theme",
              "param_color_itemIconColor": "theme",
              "param_color_itemOpacity": "theme",
              "param_color_loadMoreButtonBorderColor": "theme",
              "param_color_loadMoreButtonColor": "theme",
              "param_color_loadMoreButtonFontColor": "theme",
              "param_color_te-background-color-picker": "value",
              "param_color_titleColorExpand": "theme",
              "param_font_descriptionFontExpand": "value",
              "param_font_itemDescriptionFont": "value",
              "param_font_itemDescriptionFontSlideshow": "value",
              "param_font_itemFont": "value",
              "param_font_itemFontSlideshow": "value",
              "param_font_loadMoreButtonFont": "value",
              "param_font_loadMoreButtonText": "value",
              "param_font_text-editor-font": "value",
              "param_font_titleFontExpand": "value",
              "param_number_collageDensity": "value",
              "param_number_galleryLayout": "value",
              "param_number_gallerySize": "value",
              "param_number_te-padding-slider": "value"
            },
            "groups": {}
          },
          "componentClassName": "wysiwyg.viewer.components.tpapps.TPAWidget",
          "pageId": "",
          "compId": "",
          "styleType": "custom",
          "skin": "wysiwyg.viewer.skins.TPAWidgetSkin"
        },
        "style-jhltmyvr": {
          "type": "TopLevelStyle",
          "id": "style-jhltmyvr",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "0",
              "alpha-brd": "0",
              "bg": "61,155,233,1",
              "boxShadowToggleOn-shd": "false",
              "brd": "#324158",
              "brw": "0px",
              "rd": "0px",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)"
            },
            "propertiesSource": {
              "alpha-bg": "value",
              "alpha-brd": "value",
              "bg": "value",
              "brd": "value",
              "brw": "value",
              "rd": "value",
              "shd": "value"
            },
            "groups": {}
          },
          "componentClassName": "mobile.core.components.Container",
          "pageId": "",
          "compId": "",
          "styleType": "custom",
          "skin": "wysiwyg.viewer.skins.area.DefaultAreaSkin"
        },
        "style-jhltmzn4": {
          "type": "TopLevelStyle",
          "id": "style-jhltmzn4",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "0",
              "alpha-brd": "0",
              "bg": "61,155,233,1",
              "boxShadowToggleOn-shd": "false",
              "brd": "#324158",
              "brw": "0px",
              "rd": "0px",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)"
            },
            "propertiesSource": {
              "alpha-bg": "value",
              "alpha-brd": "value",
              "bg": "value",
              "brd": "value",
              "brw": "value",
              "rd": "value",
              "shd": "value"
            },
            "groups": {}
          },
          "componentClassName": "mobile.core.components.Container",
          "pageId": "",
          "compId": "",
          "styleType": "custom",
          "skin": "wysiwyg.viewer.skins.area.DefaultAreaSkin"
        },
        "style-jhltmzs7": {
          "type": "TopLevelStyle",
          "id": "style-jhltmzs7",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "0",
              "alpha-brd": "0",
              "bg": "61,155,233,1",
              "boxShadowToggleOn-shd": "false",
              "brd": "#324158",
              "brw": "0px",
              "rd": "0px",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)"
            },
            "propertiesSource": {
              "alpha-bg": "value",
              "alpha-brd": "value",
              "bg": "value",
              "brd": "value",
              "brw": "value",
              "rd": "value",
              "shd": "value"
            },
            "groups": {}
          },
          "componentClassName": "mobile.core.components.Container",
          "pageId": "",
          "compId": "",
          "styleType": "custom",
          "skin": "wysiwyg.viewer.skins.area.DefaultAreaSkin"
        },
        "style-jhltn0fb": {
          "type": "TopLevelStyle",
          "id": "style-jhltn0fb",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "0",
              "alpha-brd": "0",
              "bg": "61,155,233,1",
              "boxShadowToggleOn-shd": "false",
              "brd": "#324158",
              "brw": "0px",
              "rd": "0px",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)"
            },
            "propertiesSource": {
              "alpha-bg": "value",
              "alpha-brd": "value",
              "bg": "value",
              "brd": "value",
              "brw": "value",
              "rd": "value",
              "shd": "value"
            },
            "groups": {}
          },
          "componentClassName": "mobile.core.components.Container",
          "pageId": "",
          "compId": "",
          "styleType": "custom",
          "skin": "wysiwyg.viewer.skins.area.DefaultAreaSkin"
        },
        "style-jhltn701": {
          "type": "TopLevelStyle",
          "id": "style-jhltn701",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "0",
              "alpha-brd": "0",
              "bg": "61,155,233,1",
              "boxShadowToggleOn-shd": "false",
              "brd": "#324158",
              "brw": "0px",
              "rd": "0px",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)"
            },
            "propertiesSource": {
              "alpha-bg": "value",
              "alpha-brd": "value",
              "bg": "value",
              "brd": "value",
              "brw": "value",
              "rd": "value",
              "shd": "value"
            },
            "groups": {}
          },
          "componentClassName": "mobile.core.components.Container",
          "pageId": "",
          "compId": "",
          "styleType": "custom",
          "skin": "wysiwyg.viewer.skins.area.DefaultAreaSkin"
        },
        "style-jhltncz5": {
          "type": "TopLevelStyle",
          "id": "style-jhltncz5",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "0",
              "alpha-brd": "0",
              "bg": "61,155,233,1",
              "boxShadowToggleOn-shd": "false",
              "brd": "#324158",
              "brw": "0px",
              "rd": "0px",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)"
            },
            "propertiesSource": {
              "alpha-bg": "value",
              "alpha-brd": "value",
              "bg": "value",
              "brd": "value",
              "brw": "value",
              "rd": "value",
              "shd": "value"
            },
            "groups": {}
          },
          "componentClassName": "mobile.core.components.Container",
          "pageId": "",
          "compId": "",
          "styleType": "custom",
          "skin": "wysiwyg.viewer.skins.area.DefaultAreaSkin"
        },
        "style-jhltnk6d": {
          "type": "TopLevelStyle",
          "id": "style-jhltnk6d",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-columnDivider": "0",
              "alpha-containerBg": "1",
              "alpha-containerBrd": "0",
              "alpha-headerBg": "0",
              "alpha-headerDivider": "0",
              "alpha-row2Bg": "0",
              "alpha-rowBg": "0",
              "alpha-rowDivider": "1",
              "alpha-rowOrCellHoverBg": "0.05",
              "alpha-selection": "0.1",
              "boxShadowToggleOn-shd": "false",
              "cellPadding": "0",
              "columnDivider": "#FFFFFF",
              "columnDivider_w": "0",
              "containerBg": "#ECF2F5",
              "containerBrd": "#FFFFFF",
              "containerBrw": "0",
              "headerBg": "#000000",
              "headerDivider": "#FFFFFF",
              "headerDivider_w": "2",
              "headerFont": "normal normal normal 18px/1.4em brandon-grot-w01-light",
              "headerText": "#000000",
              "rd": "0px",
              "row2Bg": "#FFFFFF",
              "rowBg": "#FFFFFF",
              "rowDivider": "#FFFFFF",
              "rowDivider_w": "6",
              "rowFont": "normal normal normal 12px/1.4em brandon-grot-w01-light",
              "rowOrCellHoverBg": "#000000",
              "rowText": "#000000",
              "selection": "#000000",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)"
            },
            "propertiesSource": {
              "alpha-columnDivider": "value",
              "alpha-containerBrd": "value",
              "alpha-headerBg": "value",
              "alpha-headerDivider": "value",
              "alpha-row2Bg": "value",
              "alpha-rowBg": "value",
              "alpha-rowDivider": "value",
              "alpha-rowOrCellHoverBg": "value",
              "alpha-selection": "value",
              "columnDivider": "value",
              "columnDivider_w": "value",
              "containerBg": "value",
              "containerBrd": "value",
              "containerBrw": "value",
              "headerBg": "value",
              "headerDivider": "value",
              "headerDivider_w": "value",
              "headerFont": "value",
              "headerText": "value",
              "rd": "value",
              "row2Bg": "value",
              "rowBg": "value",
              "rowDivider": "value",
              "rowDivider_w": "value",
              "rowFont": "value",
              "rowText": "value",
              "selection": "value"
            },
            "groups": {}
          },
          "componentClassName": "wysiwyg.viewer.components.Grid",
          "pageId": "",
          "compId": "",
          "styleType": "custom",
          "skin": "wysiwyg.viewer.skins.GridSkin"
        },
        "style-jhltnzc7": {
          "type": "TopLevelStyle",
          "id": "style-jhltnzc7",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-columnDivider": "1",
              "alpha-containerBg": "1",
              "alpha-containerBrd": "1",
              "alpha-headerBg": "1",
              "alpha-headerColumnBg": "0.1",
              "alpha-headerDivider": "1",
              "alpha-paginationColor": "1",
              "alpha-row2Bg": "0",
              "alpha-rowBg": "0",
              "alpha-rowDivider": "0",
              "alpha-rowOrCellHoverBg": "0.1",
              "alpha-selection": "0.2",
              "boxShadowToggleOn-shd": "false",
              "cellPadding": "0",
              "columnDivider": "#00D9AE",
              "columnDivider_w": "2",
              "containerBg": "#FFFFFF",
              "containerBrd": "#00D9AE",
              "containerBrw": "3",
              "headerBg": "#00D9AE",
              "headerColumnBg": "#00D9AE",
              "headerColumnFont": "normal normal normal 14px/1.4em open+sans",
              "headerColumnText": "#00B6B0",
              "headerDivider": "#00D9AE",
              "headerDivider_w": "0",
              "headerFont": "normal normal normal 16px/1.4em open+sans",
              "headerText": "#FFFFFF",
              "linkColor": "#00B6B0",
              "linkHoverColor": "#331fDD",
              "paginationColor": "#00D9AE",
              "row2Bg": "#FFFFFF",
              "rowBg": "#FFFFFF",
              "rowDivider": "#FFFFFF",
              "rowDivider_w": "0",
              "rowOrCellHoverBg": "#00D9AE",
              "rowText": "#00B6B0",
              "selection": "#00D9AE",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)"
            },
            "propertiesSource": {
              "alpha-columnDivider": "value",
              "alpha-headerColumnBg": "value",
              "alpha-headerDivider": "value",
              "alpha-paginationColor": "value",
              "alpha-row2Bg": "value",
              "alpha-rowBg": "value",
              "alpha-rowOrCellHoverBg": "value",
              "alpha-selection": "value",
              "cellPadding": "value",
              "columnDivider": "value",
              "columnDivider_w": "value",
              "containerBg": "value",
              "containerBrd": "value",
              "containerBrw": "value",
              "headerBg": "value",
              "headerColumnBg": "value",
              "headerColumnFont": "value",
              "headerColumnText": "value",
              "headerDivider": "value",
              "headerDivider_w": "value",
              "headerFont": "value",
              "headerText": "value",
              "linkColor": "value",
              "linkHoverColor": "value",
              "paginationColor": "value",
              "row2Bg": "value",
              "rowBg": "value",
              "rowDivider": "value",
              "rowDivider_w": "value",
              "rowText": "value",
              "selection": "value"
            },
            "groups": {}
          },
          "componentClassName": "wysiwyg.viewer.components.Grid",
          "pageId": "",
          "compId": "",
          "styleType": "custom",
          "skin": "wysiwyg.viewer.skins.GridLeftHeaderSkin"
        },
        "style-jhlto2o5": {
          "type": "TopLevelStyle",
          "id": "style-jhlto2o5",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-columnDivider": "0",
              "alpha-containerBg": "1",
              "alpha-containerBrd": "1",
              "alpha-headerBg": "1",
              "alpha-headerDivider": "0",
              "alpha-row2Bg": "0.4",
              "alpha-rowBg": "1",
              "alpha-rowDivider": "1",
              "alpha-rowOrCellHoverBg": "0.3",
              "alpha-selection": "1",
              "boxShadowToggleOn-shd": "false",
              "cellPadding": "40",
              "columnDivider": "#000000",
              "containerBg": "#FFFFFF",
              "containerBrd": "#6E6E6E",
              "containerBrw": "2",
              "headerBg": "#000000",
              "headerDivider": "#6E6E6E",
              "headerFont": "normal normal normal 15px/1.4em spinnaker",
              "headerText": "#FFFFFF",
              "row2Bg": "#FFFFFF",
              "rowBg": "#FFFFFF",
              "rowDivider": "#6E6E6E",
              "rowFont": "normal normal normal 14px/1.4em spinnaker",
              "rowOrCellHoverBg": "#E6E6E6",
              "rowText": "#000000",
              "selection": "#E6E6E6",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)"
            },
            "propertiesSource": {
              "alpha-columnDivider": "value",
              "alpha-rowDivider": "value",
              "alpha-rowOrCellHoverBg": "value",
              "columnDivider": "value",
              "containerBg": "value",
              "containerBrd": "value",
              "headerBg": "value",
              "headerDivider": "value",
              "headerFont": "value",
              "headerText": "value",
              "row2Bg": "value",
              "rowDivider": "value",
              "rowFont": "value",
              "rowOrCellHoverBg": "value",
              "rowText": "value",
              "selection": "value"
            },
            "groups": {}
          },
          "componentClassName": "wysiwyg.viewer.components.Grid",
          "pageId": "",
          "compId": "",
          "styleType": "custom",
          "skin": "wysiwyg.viewer.skins.GridSkin"
        },
        "style-jhmt19zi": {
          "type": "TopLevelStyle",
          "id": "style-jhmt19zi",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "0",
              "alpha-brd": "0",
              "bg": "61,155,233,1",
              "boxShadowToggleOn-shd": "false",
              "brd": "#324158",
              "brw": "0px",
              "rd": "0px",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)"
            },
            "propertiesSource": {
              "alpha-bg": "value",
              "alpha-brd": "value",
              "bg": "value",
              "brd": "value",
              "brw": "value",
              "rd": "value",
              "shd": "value"
            },
            "groups": {}
          },
          "componentClassName": "mobile.core.components.Container",
          "pageId": "",
          "compId": "",
          "styleType": "custom",
          "skin": "wysiwyg.viewer.skins.area.DefaultAreaSkin"
        },
        "style-jhmt1au4": {
          "type": "TopLevelStyle",
          "id": "style-jhmt1au4",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "0",
              "alpha-brd": "0",
              "bg": "61,155,233,1",
              "boxShadowToggleOn-shd": "false",
              "brd": "#324158",
              "brw": "0px",
              "rd": "0px",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)"
            },
            "propertiesSource": {
              "alpha-bg": "value",
              "alpha-brd": "value",
              "bg": "value",
              "brd": "value",
              "brw": "value",
              "rd": "value",
              "shd": "value"
            },
            "groups": {}
          },
          "componentClassName": "mobile.core.components.Container",
          "pageId": "",
          "compId": "",
          "styleType": "custom",
          "skin": "wysiwyg.viewer.skins.area.DefaultAreaSkin"
        },
        "style-jhmt1glg": {
          "type": "TopLevelStyle",
          "id": "style-jhmt1glg",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "0",
              "alpha-brd": "0",
              "bg": "61,155,233,1",
              "boxShadowToggleOn-shd": "false",
              "brd": "#324158",
              "brw": "0px",
              "rd": "0px",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)"
            },
            "propertiesSource": {
              "alpha-bg": "value",
              "alpha-brd": "value",
              "bg": "value",
              "brd": "value",
              "brw": "value",
              "rd": "value",
              "shd": "value"
            },
            "groups": {}
          },
          "componentClassName": "mobile.core.components.Container",
          "pageId": "",
          "compId": "",
          "styleType": "custom",
          "skin": "wysiwyg.viewer.skins.area.DefaultAreaSkin"
        },
        "style-jhmt1ib3": {
          "type": "TopLevelStyle",
          "id": "style-jhmt1ib3",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {},
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "wysiwyg.viewer.components.MediaContainer",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.mediaContainer.DefaultMediaContainer"
        },
        "style-jhmt1ibh1": {
          "type": "TopLevelStyle",
          "id": "style-jhmt1ibh1",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {},
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.photo.NoSkinPhoto"
        },
        "style-jhmt1icy": {
          "type": "TopLevelStyle",
          "id": "style-jhmt1icy",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "f0": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f1": "normal normal normal 16px/1.4em din-next-w01-light #545454",
              "f10": "normal normal normal 12px/1.4em din-next-w01-light #545454",
              "f2": "normal normal normal 28px/1.4em proxima-n-w01-reg #858585",
              "f3": "normal normal normal 60px/1.4em proxima-n-w01-reg #858585",
              "f4": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f5": "normal normal normal 25px/1.4em proxima-n-w01-reg #858585",
              "f6": "normal normal normal 22px/1.4em proxima-n-w01-reg #858585",
              "f7": "normal normal normal 17px/1.4em proxima-n-w01-reg #858585",
              "f8": "normal normal normal 15px/1.4em helvetica-w01-roman #858585",
              "f9": "normal normal normal 14px/1.4em proxima-n-w01-reg #858585"
            },
            "propertiesSource": {
              "f0": "value",
              "f1": "value",
              "f10": "value",
              "f2": "value",
              "f3": "value",
              "f4": "value",
              "f5": "value",
              "f6": "value",
              "f7": "value",
              "f8": "value",
              "f9": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.WRichTextNewSkin"
        },
        "style-jhmt1ie2": {
          "type": "TopLevelStyle",
          "id": "style-jhmt1ie2",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "f0": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f1": "normal normal normal 16px/1.4em din-next-w01-light #545454",
              "f10": "normal normal normal 12px/1.4em din-next-w01-light #545454",
              "f2": "normal normal normal 28px/1.4em proxima-n-w01-reg #858585",
              "f3": "normal normal normal 60px/1.4em proxima-n-w01-reg #858585",
              "f4": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f5": "normal normal normal 25px/1.4em proxima-n-w01-reg #858585",
              "f6": "normal normal normal 22px/1.4em proxima-n-w01-reg #858585",
              "f7": "normal normal normal 17px/1.4em proxima-n-w01-reg #858585",
              "f8": "normal normal normal 15px/1.4em helvetica-w01-roman #858585",
              "f9": "normal normal normal 14px/1.4em proxima-n-w01-reg #858585"
            },
            "propertiesSource": {
              "f0": "value",
              "f1": "value",
              "f10": "value",
              "f2": "value",
              "f3": "value",
              "f4": "value",
              "f5": "value",
              "f6": "value",
              "f7": "value",
              "f8": "value",
              "f9": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.WRichTextNewSkin"
        },
        "style-jhmt1ifb": {
          "type": "TopLevelStyle",
          "id": "style-jhmt1ifb",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-brd": "1",
              "brd": "#F2BF5E",
              "lnw": "3"
            },
            "propertiesSource": {
              "brd": "value",
              "lnw": "value"
            },
            "groups": {}
          },
          "componentClassName": "wysiwyg.viewer.components.FiveGridLine",
          "pageId": "",
          "compId": "",
          "styleType": "custom",
          "skin": "wysiwyg.viewer.skins.line.SolidLine"
        },
        "style-jhmta3id": {
          "type": "TopLevelStyle",
          "id": "style-jhmta3id",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "0",
              "alpha-brd": "0",
              "bg": "61,155,233,1",
              "boxShadowToggleOn-shd": "false",
              "brd": "#324158",
              "brw": "0px",
              "rd": "0px",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)"
            },
            "propertiesSource": {
              "alpha-bg": "value",
              "alpha-brd": "value",
              "bg": "value",
              "brd": "value",
              "brw": "value",
              "rd": "value",
              "shd": "value"
            },
            "groups": {}
          },
          "componentClassName": "mobile.core.components.Container",
          "pageId": "",
          "compId": "",
          "styleType": "custom",
          "skin": "wysiwyg.viewer.skins.area.DefaultAreaSkin"
        },
        "style-jhmta4ck": {
          "type": "TopLevelStyle",
          "id": "style-jhmta4ck",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "0",
              "alpha-brd": "0",
              "bg": "61,155,233,1",
              "boxShadowToggleOn-shd": "false",
              "brd": "#324158",
              "brw": "0px",
              "rd": "0px",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)"
            },
            "propertiesSource": {
              "alpha-bg": "value",
              "alpha-brd": "value",
              "bg": "value",
              "brd": "value",
              "brw": "value",
              "rd": "value",
              "shd": "value"
            },
            "groups": {}
          },
          "componentClassName": "mobile.core.components.Container",
          "pageId": "",
          "compId": "",
          "styleType": "custom",
          "skin": "wysiwyg.viewer.skins.area.DefaultAreaSkin"
        },
        "style-jhmta6jk": {
          "type": "TopLevelStyle",
          "id": "style-jhmta6jk",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {},
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "wysiwyg.viewer.components.MediaContainer",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.mediaContainer.DefaultMediaContainer"
        },
        "style-jhmta6jr1": {
          "type": "TopLevelStyle",
          "id": "style-jhmta6jr1",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {},
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.photo.NoSkinPhoto"
        },
        "style-jhmta6kt": {
          "type": "TopLevelStyle",
          "id": "style-jhmta6kt",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-brd": "1",
              "bg": "#FFFFFF",
              "boxShadowToggleOn-shd": "false",
              "brd": "#858585",
              "brw": "0",
              "rd": "0px",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)"
            },
            "propertiesSource": {
              "bg": "value",
              "brd": "value",
              "brw": "value",
              "rd": "value",
              "shd": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.area.DefaultAreaSkin"
        },
        "style-jhmta6l61": {
          "type": "TopLevelStyle",
          "id": "style-jhmta6l61",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "f0": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f1": "normal normal normal 16px/1.4em din-next-w01-light #545454",
              "f10": "normal normal normal 12px/1.4em din-next-w01-light #545454",
              "f2": "normal normal normal 28px/1.4em proxima-n-w01-reg #858585",
              "f3": "normal normal normal 60px/1.4em proxima-n-w01-reg #858585",
              "f4": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f5": "normal normal normal 25px/1.4em proxima-n-w01-reg #858585",
              "f6": "normal normal normal 22px/1.4em proxima-n-w01-reg #858585",
              "f7": "normal normal normal 17px/1.4em proxima-n-w01-reg #858585",
              "f8": "normal normal normal 15px/1.4em helvetica-w01-roman #858585",
              "f9": "normal normal normal 14px/1.4em proxima-n-w01-reg #858585"
            },
            "propertiesSource": {
              "f0": "value",
              "f1": "value",
              "f10": "value",
              "f2": "value",
              "f3": "value",
              "f4": "value",
              "f5": "value",
              "f6": "value",
              "f7": "value",
              "f8": "value",
              "f9": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.WRichTextNewSkin"
        },
        "style-jhmta6nf1": {
          "type": "TopLevelStyle",
          "id": "style-jhmta6nf1",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "f0": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f1": "normal normal normal 16px/1.4em din-next-w01-light #545454",
              "f10": "normal normal normal 12px/1.4em din-next-w01-light #545454",
              "f2": "normal normal normal 28px/1.4em proxima-n-w01-reg #858585",
              "f3": "normal normal normal 60px/1.4em proxima-n-w01-reg #858585",
              "f4": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f5": "normal normal normal 25px/1.4em proxima-n-w01-reg #858585",
              "f6": "normal normal normal 22px/1.4em proxima-n-w01-reg #858585",
              "f7": "normal normal normal 17px/1.4em proxima-n-w01-reg #858585",
              "f8": "normal normal normal 15px/1.4em helvetica-w01-roman #858585",
              "f9": "normal normal normal 14px/1.4em proxima-n-w01-reg #858585"
            },
            "propertiesSource": {
              "f0": "value",
              "f1": "value",
              "f10": "value",
              "f2": "value",
              "f3": "value",
              "f4": "value",
              "f5": "value",
              "f6": "value",
              "f7": "value",
              "f8": "value",
              "f9": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.WRichTextNewSkin"
        },
        "style-jhmta6od": {
          "type": "TopLevelStyle",
          "id": "style-jhmta6od",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "f0": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f1": "normal normal normal 16px/1.4em din-next-w01-light #545454",
              "f10": "normal normal normal 12px/1.4em din-next-w01-light #545454",
              "f2": "normal normal normal 28px/1.4em proxima-n-w01-reg #858585",
              "f3": "normal normal normal 60px/1.4em proxima-n-w01-reg #858585",
              "f4": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f5": "normal normal normal 25px/1.4em proxima-n-w01-reg #858585",
              "f6": "normal normal normal 22px/1.4em proxima-n-w01-reg #858585",
              "f7": "normal normal normal 17px/1.4em proxima-n-w01-reg #858585",
              "f8": "normal normal normal 15px/1.4em helvetica-w01-roman #858585",
              "f9": "normal normal normal 14px/1.4em proxima-n-w01-reg #858585"
            },
            "propertiesSource": {
              "f0": "value",
              "f1": "value",
              "f10": "value",
              "f2": "value",
              "f3": "value",
              "f4": "value",
              "f5": "value",
              "f6": "value",
              "f7": "value",
              "f8": "value",
              "f9": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.WRichTextNewSkin"
        },
        "style-jhmta6ph1": {
          "type": "TopLevelStyle",
          "id": "style-jhmta6ph1",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "f0": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f1": "normal normal normal 16px/1.4em din-next-w01-light #545454",
              "f10": "normal normal normal 12px/1.4em din-next-w01-light #545454",
              "f2": "normal normal normal 28px/1.4em proxima-n-w01-reg #858585",
              "f3": "normal normal normal 60px/1.4em proxima-n-w01-reg #858585",
              "f4": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f5": "normal normal normal 25px/1.4em proxima-n-w01-reg #858585",
              "f6": "normal normal normal 22px/1.4em proxima-n-w01-reg #858585",
              "f7": "normal normal normal 17px/1.4em proxima-n-w01-reg #858585",
              "f8": "normal normal normal 15px/1.4em helvetica-w01-roman #858585",
              "f9": "normal normal normal 14px/1.4em proxima-n-w01-reg #858585"
            },
            "propertiesSource": {
              "f0": "value",
              "f1": "value",
              "f10": "value",
              "f2": "value",
              "f3": "value",
              "f4": "value",
              "f5": "value",
              "f6": "value",
              "f7": "value",
              "f8": "value",
              "f9": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.WRichTextNewSkin"
        },
        "style-jhmta6qh": {
          "type": "TopLevelStyle",
          "id": "style-jhmta6qh",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "f0": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f1": "normal normal normal 16px/1.4em din-next-w01-light #545454",
              "f10": "normal normal normal 12px/1.4em din-next-w01-light #545454",
              "f2": "normal normal normal 28px/1.4em proxima-n-w01-reg #858585",
              "f3": "normal normal normal 60px/1.4em proxima-n-w01-reg #858585",
              "f4": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f5": "normal normal normal 25px/1.4em proxima-n-w01-reg #858585",
              "f6": "normal normal normal 22px/1.4em proxima-n-w01-reg #858585",
              "f7": "normal normal normal 17px/1.4em proxima-n-w01-reg #858585",
              "f8": "normal normal normal 15px/1.4em helvetica-w01-roman #858585",
              "f9": "normal normal normal 14px/1.4em proxima-n-w01-reg #858585"
            },
            "propertiesSource": {
              "f0": "value",
              "f1": "value",
              "f10": "value",
              "f2": "value",
              "f3": "value",
              "f4": "value",
              "f5": "value",
              "f6": "value",
              "f7": "value",
              "f8": "value",
              "f9": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.WRichTextNewSkin"
        },
        "style-jhmta6s11": {
          "type": "TopLevelStyle",
          "id": "style-jhmta6s11",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-bgh": "1",
              "alpha-brd": "1",
              "alpha-brdh": "0",
              "alpha-txt": "1",
              "alpha-txth": "1",
              "bg": "#36B5CD",
              "bgh": "#5BC9DE",
              "boxShadowToggleOn-shd": "false",
              "brd": "#545454",
              "brdh": "#F9F9F9",
              "brw": "0",
              "fnt": "normal normal normal 15px/1.4em helvetica-w01-roman #858585",
              "rd": "0px",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)",
              "txt": "#FFFFFF",
              "txth": "#FFFFFF"
            },
            "propertiesSource": {
              "alpha-brdh": "value",
              "bg": "value",
              "bgh": "value",
              "brd": "value",
              "brdh": "value",
              "brw": "value",
              "fnt": "value",
              "rd": "value",
              "shd": "value",
              "txt": "value",
              "txth": "value"
            },
            "groups": {}
          },
          "componentClassName": "wysiwyg.viewer.components.SiteButton",
          "pageId": "",
          "compId": "",
          "styleType": "custom",
          "skin": "wysiwyg.viewer.skins.button.BasicButton"
        },
        "style-jhmu2obv1": {
          "type": "TopLevelStyle",
          "id": "style-jhmu2obv1",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-bgh": "1",
              "alpha-brd": "1",
              "alpha-brdh": "1",
              "alpha-txt": "1",
              "alpha-txth": "1",
              "bg": "#3D9BE9",
              "bgh": "#2B689C",
              "boxShadowToggleOn-shd": "false",
              "brd": "#2B689C",
              "brdh": "#3D9BE9",
              "brw": "0px",
              "fnt": "normal normal normal 14px/1.4em raleway",
              "rd": "20px",
              "shd": "0 1px 4px rgba(0, 0, 0, 0.6);",
              "txt": "#FFFFFF",
              "txth": "#FFFFFF"
            },
            "propertiesSource": {
              "bg": "value",
              "bgh": "value",
              "brd": "value",
              "brdh": "value",
              "brw": "value",
              "fnt": "value",
              "rd": "value",
              "shd": "value",
              "txt": "value",
              "txth": "value"
            },
            "groups": {}
          },
          "componentClassName": "platform.components.AppController",
          "styleType": "system",
          "skin": "platform.components.skins.controllerSkin"
        },
        "style-jhmu4lor": {
          "type": "TopLevelStyle",
          "id": "style-jhmu4lor",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-bgh": "1",
              "alpha-brd": "1",
              "alpha-brdh": "1",
              "alpha-txt": "1",
              "alpha-txth": "1",
              "bg": "#3D9BE9",
              "bgh": "#2B689C",
              "boxShadowToggleOn-shd": "false",
              "brd": "#2B689C",
              "brdh": "#3D9BE9",
              "brw": "0px",
              "fnt": "normal normal normal 14px/1.4em raleway",
              "rd": "20px",
              "shd": "0 1px 4px rgba(0, 0, 0, 0.6);",
              "txt": "#FFFFFF",
              "txth": "#FFFFFF"
            },
            "propertiesSource": {
              "bg": "value",
              "bgh": "value",
              "brd": "value",
              "brdh": "value",
              "brw": "value",
              "fnt": "value",
              "rd": "value",
              "shd": "value",
              "txt": "value",
              "txth": "value"
            },
            "groups": {}
          },
          "componentClassName": "platform.components.AppController",
          "styleType": "system",
          "skin": "platform.components.skins.controllerSkin"
        },
        "style-jhn1jx03": {
          "type": "TopLevelStyle",
          "id": "style-jhn1jx03",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-bgh": "1",
              "alpha-brd": "1",
              "alpha-brdh": "1",
              "alpha-txt": "1",
              "alpha-txth": "1",
              "bg": "#3D9BE9",
              "bgh": "#2B689C",
              "boxShadowToggleOn-shd": "false",
              "brd": "#2B689C",
              "brdh": "#3D9BE9",
              "brw": "0px",
              "fnt": "normal normal normal 14px/1.4em raleway",
              "rd": "20px",
              "shd": "0 1px 4px rgba(0, 0, 0, 0.6);",
              "txt": "#FFFFFF",
              "txth": "#FFFFFF"
            },
            "propertiesSource": {
              "bg": "value",
              "bgh": "value",
              "brd": "value",
              "brdh": "value",
              "brw": "value",
              "fnt": "value",
              "rd": "value",
              "shd": "value",
              "txt": "value",
              "txth": "value"
            },
            "groups": {}
          },
          "componentClassName": "platform.components.AppController",
          "styleType": "system",
          "skin": "platform.components.skins.controllerSkin"
        },
        "style-jhn1l1sd": {
          "type": "TopLevelStyle",
          "id": "style-jhn1l1sd",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "0",
              "alpha-brd": "0",
              "bg": "61,155,233,1",
              "boxShadowToggleOn-shd": "false",
              "brd": "#324158",
              "brw": "0px",
              "rd": "0px",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)"
            },
            "propertiesSource": {
              "alpha-bg": "value",
              "alpha-brd": "value",
              "bg": "value",
              "brd": "value",
              "brw": "value",
              "rd": "value",
              "shd": "value"
            },
            "groups": {}
          },
          "componentClassName": "mobile.core.components.Container",
          "pageId": "",
          "compId": "",
          "styleType": "custom",
          "skin": "wysiwyg.viewer.skins.area.DefaultAreaSkin"
        },
        "style-jhn1l2zj": {
          "type": "TopLevelStyle",
          "id": "style-jhn1l2zj",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {},
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "wysiwyg.viewer.components.MediaContainer",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.mediaContainer.DefaultMediaContainer"
        },
        "style-jhn1l2zp1": {
          "type": "TopLevelStyle",
          "id": "style-jhn1l2zp1",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {},
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.photo.NoSkinPhoto"
        },
        "style-jhn1l31c": {
          "type": "TopLevelStyle",
          "id": "style-jhn1l31c",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-brd": "1",
              "bg": "#FFFFFF",
              "boxShadowToggleOn-shd": "false",
              "brd": "#858585",
              "brw": "0",
              "rd": "0px",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)"
            },
            "propertiesSource": {
              "bg": "value",
              "brd": "value",
              "brw": "value",
              "rd": "value",
              "shd": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.area.DefaultAreaSkin"
        },
        "style-jhn1l31n1": {
          "type": "TopLevelStyle",
          "id": "style-jhn1l31n1",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "f0": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f1": "normal normal normal 16px/1.4em din-next-w01-light #545454",
              "f10": "normal normal normal 12px/1.4em din-next-w01-light #545454",
              "f2": "normal normal normal 28px/1.4em proxima-n-w01-reg #858585",
              "f3": "normal normal normal 60px/1.4em proxima-n-w01-reg #858585",
              "f4": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f5": "normal normal normal 25px/1.4em proxima-n-w01-reg #858585",
              "f6": "normal normal normal 22px/1.4em proxima-n-w01-reg #858585",
              "f7": "normal normal normal 17px/1.4em proxima-n-w01-reg #858585",
              "f8": "normal normal normal 15px/1.4em helvetica-w01-roman #858585",
              "f9": "normal normal normal 14px/1.4em proxima-n-w01-reg #858585"
            },
            "propertiesSource": {
              "f0": "value",
              "f1": "value",
              "f10": "value",
              "f2": "value",
              "f3": "value",
              "f4": "value",
              "f5": "value",
              "f6": "value",
              "f7": "value",
              "f8": "value",
              "f9": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.WRichTextNewSkin"
        },
        "style-jhn1l33w1": {
          "type": "TopLevelStyle",
          "id": "style-jhn1l33w1",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "f0": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f1": "normal normal normal 16px/1.4em din-next-w01-light #545454",
              "f10": "normal normal normal 12px/1.4em din-next-w01-light #545454",
              "f2": "normal normal normal 28px/1.4em proxima-n-w01-reg #858585",
              "f3": "normal normal normal 60px/1.4em proxima-n-w01-reg #858585",
              "f4": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f5": "normal normal normal 25px/1.4em proxima-n-w01-reg #858585",
              "f6": "normal normal normal 22px/1.4em proxima-n-w01-reg #858585",
              "f7": "normal normal normal 17px/1.4em proxima-n-w01-reg #858585",
              "f8": "normal normal normal 15px/1.4em helvetica-w01-roman #858585",
              "f9": "normal normal normal 14px/1.4em proxima-n-w01-reg #858585"
            },
            "propertiesSource": {
              "f0": "value",
              "f1": "value",
              "f10": "value",
              "f2": "value",
              "f3": "value",
              "f4": "value",
              "f5": "value",
              "f6": "value",
              "f7": "value",
              "f8": "value",
              "f9": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.WRichTextNewSkin"
        },
        "style-jhn1l3501": {
          "type": "TopLevelStyle",
          "id": "style-jhn1l3501",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "f0": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f1": "normal normal normal 16px/1.4em din-next-w01-light #545454",
              "f10": "normal normal normal 12px/1.4em din-next-w01-light #545454",
              "f2": "normal normal normal 28px/1.4em proxima-n-w01-reg #858585",
              "f3": "normal normal normal 60px/1.4em proxima-n-w01-reg #858585",
              "f4": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f5": "normal normal normal 25px/1.4em proxima-n-w01-reg #858585",
              "f6": "normal normal normal 22px/1.4em proxima-n-w01-reg #858585",
              "f7": "normal normal normal 17px/1.4em proxima-n-w01-reg #858585",
              "f8": "normal normal normal 15px/1.4em helvetica-w01-roman #858585",
              "f9": "normal normal normal 14px/1.4em proxima-n-w01-reg #858585"
            },
            "propertiesSource": {
              "f0": "value",
              "f1": "value",
              "f10": "value",
              "f2": "value",
              "f3": "value",
              "f4": "value",
              "f5": "value",
              "f6": "value",
              "f7": "value",
              "f8": "value",
              "f9": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.WRichTextNewSkin"
        },
        "style-jhn1l362": {
          "type": "TopLevelStyle",
          "id": "style-jhn1l362",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "f0": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f1": "normal normal normal 16px/1.4em din-next-w01-light #545454",
              "f10": "normal normal normal 12px/1.4em din-next-w01-light #545454",
              "f2": "normal normal normal 28px/1.4em proxima-n-w01-reg #858585",
              "f3": "normal normal normal 60px/1.4em proxima-n-w01-reg #858585",
              "f4": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f5": "normal normal normal 25px/1.4em proxima-n-w01-reg #858585",
              "f6": "normal normal normal 22px/1.4em proxima-n-w01-reg #858585",
              "f7": "normal normal normal 17px/1.4em proxima-n-w01-reg #858585",
              "f8": "normal normal normal 15px/1.4em helvetica-w01-roman #858585",
              "f9": "normal normal normal 14px/1.4em proxima-n-w01-reg #858585"
            },
            "propertiesSource": {
              "f0": "value",
              "f1": "value",
              "f10": "value",
              "f2": "value",
              "f3": "value",
              "f4": "value",
              "f5": "value",
              "f6": "value",
              "f7": "value",
              "f8": "value",
              "f9": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.WRichTextNewSkin"
        },
        "style-jhn1l37f": {
          "type": "TopLevelStyle",
          "id": "style-jhn1l37f",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "f0": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f1": "normal normal normal 16px/1.4em din-next-w01-light #545454",
              "f10": "normal normal normal 12px/1.4em din-next-w01-light #545454",
              "f2": "normal normal normal 28px/1.4em proxima-n-w01-reg #858585",
              "f3": "normal normal normal 60px/1.4em proxima-n-w01-reg #858585",
              "f4": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f5": "normal normal normal 25px/1.4em proxima-n-w01-reg #858585",
              "f6": "normal normal normal 22px/1.4em proxima-n-w01-reg #858585",
              "f7": "normal normal normal 17px/1.4em proxima-n-w01-reg #858585",
              "f8": "normal normal normal 15px/1.4em helvetica-w01-roman #858585",
              "f9": "normal normal normal 14px/1.4em proxima-n-w01-reg #858585"
            },
            "propertiesSource": {
              "f0": "value",
              "f1": "value",
              "f10": "value",
              "f2": "value",
              "f3": "value",
              "f4": "value",
              "f5": "value",
              "f6": "value",
              "f7": "value",
              "f8": "value",
              "f9": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.WRichTextNewSkin"
        },
        "style-jhn1l38k1": {
          "type": "TopLevelStyle",
          "id": "style-jhn1l38k1",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-bgh": "1",
              "alpha-brd": "1",
              "alpha-brdh": "0",
              "alpha-txt": "1",
              "alpha-txth": "1",
              "bg": "#36B5CD",
              "bgh": "#5BC9DE",
              "boxShadowToggleOn-shd": "false",
              "brd": "#545454",
              "brdh": "#F9F9F9",
              "brw": "0",
              "fnt": "normal normal normal 15px/1.4em helvetica-w01-roman #858585",
              "rd": "0px",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)",
              "txt": "#FFFFFF",
              "txth": "#FFFFFF"
            },
            "propertiesSource": {
              "alpha-brdh": "value",
              "bg": "value",
              "bgh": "value",
              "brd": "value",
              "brdh": "value",
              "brw": "value",
              "fnt": "value",
              "rd": "value",
              "shd": "value",
              "txt": "value",
              "txth": "value"
            },
            "groups": {}
          },
          "componentClassName": "wysiwyg.viewer.components.SiteButton",
          "pageId": "",
          "compId": "",
          "styleType": "custom",
          "skin": "wysiwyg.viewer.skins.button.BasicButton"
        },
        "style-jhn1pm7l": {
          "type": "TopLevelStyle",
          "id": "style-jhn1pm7l",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "0",
              "alpha-brd": "0",
              "bg": "61,155,233,1",
              "boxShadowToggleOn-shd": "false",
              "brd": "#324158",
              "brw": "0px",
              "rd": "0px",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)"
            },
            "propertiesSource": {
              "alpha-bg": "value",
              "alpha-brd": "value",
              "bg": "value",
              "brd": "value",
              "brw": "value",
              "rd": "value",
              "shd": "value"
            },
            "groups": {}
          },
          "componentClassName": "mobile.core.components.Container",
          "pageId": "",
          "compId": "",
          "styleType": "custom",
          "skin": "wysiwyg.viewer.skins.area.DefaultAreaSkin"
        },
        "style-jhn1pn0d": {
          "type": "TopLevelStyle",
          "id": "style-jhn1pn0d",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {},
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "wysiwyg.viewer.components.MediaContainer",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.mediaContainer.DefaultMediaContainer"
        },
        "style-jhn1pn0j1": {
          "type": "TopLevelStyle",
          "id": "style-jhn1pn0j1",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {},
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.photo.NoSkinPhoto"
        },
        "style-jhn1pn1r": {
          "type": "TopLevelStyle",
          "id": "style-jhn1pn1r",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-brd": "1",
              "bg": "#FFFFFF",
              "boxShadowToggleOn-shd": "false",
              "brd": "#858585",
              "brw": "0",
              "rd": "0px",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)"
            },
            "propertiesSource": {
              "bg": "value",
              "brd": "value",
              "brw": "value",
              "rd": "value",
              "shd": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.area.DefaultAreaSkin"
        },
        "style-jhn1pn221": {
          "type": "TopLevelStyle",
          "id": "style-jhn1pn221",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "f0": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f1": "normal normal normal 16px/1.4em din-next-w01-light #545454",
              "f10": "normal normal normal 12px/1.4em din-next-w01-light #545454",
              "f2": "normal normal normal 28px/1.4em proxima-n-w01-reg #858585",
              "f3": "normal normal normal 60px/1.4em proxima-n-w01-reg #858585",
              "f4": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f5": "normal normal normal 25px/1.4em proxima-n-w01-reg #858585",
              "f6": "normal normal normal 22px/1.4em proxima-n-w01-reg #858585",
              "f7": "normal normal normal 17px/1.4em proxima-n-w01-reg #858585",
              "f8": "normal normal normal 15px/1.4em helvetica-w01-roman #858585",
              "f9": "normal normal normal 14px/1.4em proxima-n-w01-reg #858585"
            },
            "propertiesSource": {
              "f0": "value",
              "f1": "value",
              "f10": "value",
              "f2": "value",
              "f3": "value",
              "f4": "value",
              "f5": "value",
              "f6": "value",
              "f7": "value",
              "f8": "value",
              "f9": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.WRichTextNewSkin"
        },
        "style-jhn1pn3u": {
          "type": "TopLevelStyle",
          "id": "style-jhn1pn3u",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "f0": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f1": "normal normal normal 16px/1.4em din-next-w01-light #545454",
              "f10": "normal normal normal 12px/1.4em din-next-w01-light #545454",
              "f2": "normal normal normal 28px/1.4em proxima-n-w01-reg #858585",
              "f3": "normal normal normal 60px/1.4em proxima-n-w01-reg #858585",
              "f4": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f5": "normal normal normal 25px/1.4em proxima-n-w01-reg #858585",
              "f6": "normal normal normal 22px/1.4em proxima-n-w01-reg #858585",
              "f7": "normal normal normal 17px/1.4em proxima-n-w01-reg #858585",
              "f8": "normal normal normal 15px/1.4em helvetica-w01-roman #858585",
              "f9": "normal normal normal 14px/1.4em proxima-n-w01-reg #858585"
            },
            "propertiesSource": {
              "f0": "value",
              "f1": "value",
              "f10": "value",
              "f2": "value",
              "f3": "value",
              "f4": "value",
              "f5": "value",
              "f6": "value",
              "f7": "value",
              "f8": "value",
              "f9": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.WRichTextNewSkin"
        },
        "style-jhn1pn4t1": {
          "type": "TopLevelStyle",
          "id": "style-jhn1pn4t1",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "f0": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f1": "normal normal normal 16px/1.4em din-next-w01-light #545454",
              "f10": "normal normal normal 12px/1.4em din-next-w01-light #545454",
              "f2": "normal normal normal 28px/1.4em proxima-n-w01-reg #858585",
              "f3": "normal normal normal 60px/1.4em proxima-n-w01-reg #858585",
              "f4": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f5": "normal normal normal 25px/1.4em proxima-n-w01-reg #858585",
              "f6": "normal normal normal 22px/1.4em proxima-n-w01-reg #858585",
              "f7": "normal normal normal 17px/1.4em proxima-n-w01-reg #858585",
              "f8": "normal normal normal 15px/1.4em helvetica-w01-roman #858585",
              "f9": "normal normal normal 14px/1.4em proxima-n-w01-reg #858585"
            },
            "propertiesSource": {
              "f0": "value",
              "f1": "value",
              "f10": "value",
              "f2": "value",
              "f3": "value",
              "f4": "value",
              "f5": "value",
              "f6": "value",
              "f7": "value",
              "f8": "value",
              "f9": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.WRichTextNewSkin"
        },
        "style-jhn1pn5w": {
          "type": "TopLevelStyle",
          "id": "style-jhn1pn5w",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "f0": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f1": "normal normal normal 16px/1.4em din-next-w01-light #545454",
              "f10": "normal normal normal 12px/1.4em din-next-w01-light #545454",
              "f2": "normal normal normal 28px/1.4em proxima-n-w01-reg #858585",
              "f3": "normal normal normal 60px/1.4em proxima-n-w01-reg #858585",
              "f4": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f5": "normal normal normal 25px/1.4em proxima-n-w01-reg #858585",
              "f6": "normal normal normal 22px/1.4em proxima-n-w01-reg #858585",
              "f7": "normal normal normal 17px/1.4em proxima-n-w01-reg #858585",
              "f8": "normal normal normal 15px/1.4em helvetica-w01-roman #858585",
              "f9": "normal normal normal 14px/1.4em proxima-n-w01-reg #858585"
            },
            "propertiesSource": {
              "f0": "value",
              "f1": "value",
              "f10": "value",
              "f2": "value",
              "f3": "value",
              "f4": "value",
              "f5": "value",
              "f6": "value",
              "f7": "value",
              "f8": "value",
              "f9": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.WRichTextNewSkin"
        },
        "style-jhn1pn7a1": {
          "type": "TopLevelStyle",
          "id": "style-jhn1pn7a1",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "f0": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f1": "normal normal normal 16px/1.4em din-next-w01-light #545454",
              "f10": "normal normal normal 12px/1.4em din-next-w01-light #545454",
              "f2": "normal normal normal 28px/1.4em proxima-n-w01-reg #858585",
              "f3": "normal normal normal 60px/1.4em proxima-n-w01-reg #858585",
              "f4": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f5": "normal normal normal 25px/1.4em proxima-n-w01-reg #858585",
              "f6": "normal normal normal 22px/1.4em proxima-n-w01-reg #858585",
              "f7": "normal normal normal 17px/1.4em proxima-n-w01-reg #858585",
              "f8": "normal normal normal 15px/1.4em helvetica-w01-roman #858585",
              "f9": "normal normal normal 14px/1.4em proxima-n-w01-reg #858585"
            },
            "propertiesSource": {
              "f0": "value",
              "f1": "value",
              "f10": "value",
              "f2": "value",
              "f3": "value",
              "f4": "value",
              "f5": "value",
              "f6": "value",
              "f7": "value",
              "f8": "value",
              "f9": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.WRichTextNewSkin"
        },
        "style-jhn1pn8f1": {
          "type": "TopLevelStyle",
          "id": "style-jhn1pn8f1",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-bgh": "1",
              "alpha-brd": "1",
              "alpha-brdh": "0",
              "alpha-txt": "1",
              "alpha-txth": "1",
              "bg": "#36B5CD",
              "bgh": "#5BC9DE",
              "boxShadowToggleOn-shd": "false",
              "brd": "#545454",
              "brdh": "#F9F9F9",
              "brw": "0",
              "fnt": "normal normal normal 15px/1.4em helvetica-w01-roman #858585",
              "rd": "0px",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)",
              "txt": "#FFFFFF",
              "txth": "#FFFFFF"
            },
            "propertiesSource": {
              "alpha-brdh": "value",
              "bg": "value",
              "bgh": "value",
              "brd": "value",
              "brdh": "value",
              "brw": "value",
              "fnt": "value",
              "rd": "value",
              "shd": "value",
              "txt": "value",
              "txth": "value"
            },
            "groups": {}
          },
          "componentClassName": "wysiwyg.viewer.components.SiteButton",
          "pageId": "",
          "compId": "",
          "styleType": "custom",
          "skin": "wysiwyg.viewer.skins.button.BasicButton"
        },
        "style-jhn1t5s8": {
          "type": "TopLevelStyle",
          "id": "style-jhn1t5s8",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "0",
              "alpha-brd": "0",
              "bg": "61,155,233,1",
              "boxShadowToggleOn-shd": "false",
              "brd": "#324158",
              "brw": "0px",
              "rd": "0px",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)"
            },
            "propertiesSource": {
              "alpha-bg": "value",
              "alpha-brd": "value",
              "bg": "value",
              "brd": "value",
              "brw": "value",
              "rd": "value",
              "shd": "value"
            },
            "groups": {}
          },
          "componentClassName": "mobile.core.components.Container",
          "pageId": "",
          "compId": "",
          "styleType": "custom",
          "skin": "wysiwyg.viewer.skins.area.DefaultAreaSkin"
        },
        "style-jhn1t6l6": {
          "type": "TopLevelStyle",
          "id": "style-jhn1t6l6",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {},
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "wysiwyg.viewer.components.MediaContainer",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.mediaContainer.DefaultMediaContainer"
        },
        "style-jhn1t6ld1": {
          "type": "TopLevelStyle",
          "id": "style-jhn1t6ld1",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {},
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.photo.NoSkinPhoto"
        },
        "style-jhn1t6m61": {
          "type": "TopLevelStyle",
          "id": "style-jhn1t6m61",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-brd": "1",
              "bg": "#FFFFFF",
              "boxShadowToggleOn-shd": "false",
              "brd": "#858585",
              "brw": "0",
              "rd": "0px",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)"
            },
            "propertiesSource": {
              "bg": "value",
              "brd": "value",
              "brw": "value",
              "rd": "value",
              "shd": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.area.DefaultAreaSkin"
        },
        "style-jhn1t6mi": {
          "type": "TopLevelStyle",
          "id": "style-jhn1t6mi",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "f0": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f1": "normal normal normal 16px/1.4em din-next-w01-light #545454",
              "f10": "normal normal normal 12px/1.4em din-next-w01-light #545454",
              "f2": "normal normal normal 28px/1.4em proxima-n-w01-reg #858585",
              "f3": "normal normal normal 60px/1.4em proxima-n-w01-reg #858585",
              "f4": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f5": "normal normal normal 25px/1.4em proxima-n-w01-reg #858585",
              "f6": "normal normal normal 22px/1.4em proxima-n-w01-reg #858585",
              "f7": "normal normal normal 17px/1.4em proxima-n-w01-reg #858585",
              "f8": "normal normal normal 15px/1.4em helvetica-w01-roman #858585",
              "f9": "normal normal normal 14px/1.4em proxima-n-w01-reg #858585"
            },
            "propertiesSource": {
              "f0": "value",
              "f1": "value",
              "f10": "value",
              "f2": "value",
              "f3": "value",
              "f4": "value",
              "f5": "value",
              "f6": "value",
              "f7": "value",
              "f8": "value",
              "f9": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.WRichTextNewSkin"
        },
        "style-jhn1t6ni1": {
          "type": "TopLevelStyle",
          "id": "style-jhn1t6ni1",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "f0": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f1": "normal normal normal 16px/1.4em din-next-w01-light #545454",
              "f10": "normal normal normal 12px/1.4em din-next-w01-light #545454",
              "f2": "normal normal normal 28px/1.4em proxima-n-w01-reg #858585",
              "f3": "normal normal normal 60px/1.4em proxima-n-w01-reg #858585",
              "f4": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f5": "normal normal normal 25px/1.4em proxima-n-w01-reg #858585",
              "f6": "normal normal normal 22px/1.4em proxima-n-w01-reg #858585",
              "f7": "normal normal normal 17px/1.4em proxima-n-w01-reg #858585",
              "f8": "normal normal normal 15px/1.4em helvetica-w01-roman #858585",
              "f9": "normal normal normal 14px/1.4em proxima-n-w01-reg #858585"
            },
            "propertiesSource": {
              "f0": "value",
              "f1": "value",
              "f10": "value",
              "f2": "value",
              "f3": "value",
              "f4": "value",
              "f5": "value",
              "f6": "value",
              "f7": "value",
              "f8": "value",
              "f9": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.WRichTextNewSkin"
        },
        "style-jhn1t6op": {
          "type": "TopLevelStyle",
          "id": "style-jhn1t6op",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "f0": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f1": "normal normal normal 16px/1.4em din-next-w01-light #545454",
              "f10": "normal normal normal 12px/1.4em din-next-w01-light #545454",
              "f2": "normal normal normal 28px/1.4em proxima-n-w01-reg #858585",
              "f3": "normal normal normal 60px/1.4em proxima-n-w01-reg #858585",
              "f4": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f5": "normal normal normal 25px/1.4em proxima-n-w01-reg #858585",
              "f6": "normal normal normal 22px/1.4em proxima-n-w01-reg #858585",
              "f7": "normal normal normal 17px/1.4em proxima-n-w01-reg #858585",
              "f8": "normal normal normal 15px/1.4em helvetica-w01-roman #858585",
              "f9": "normal normal normal 14px/1.4em proxima-n-w01-reg #858585"
            },
            "propertiesSource": {
              "f0": "value",
              "f1": "value",
              "f10": "value",
              "f2": "value",
              "f3": "value",
              "f4": "value",
              "f5": "value",
              "f6": "value",
              "f7": "value",
              "f8": "value",
              "f9": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.WRichTextNewSkin"
        },
        "style-jhn1t6pg": {
          "type": "TopLevelStyle",
          "id": "style-jhn1t6pg",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "f0": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f1": "normal normal normal 16px/1.4em din-next-w01-light #545454",
              "f10": "normal normal normal 12px/1.4em din-next-w01-light #545454",
              "f2": "normal normal normal 28px/1.4em proxima-n-w01-reg #858585",
              "f3": "normal normal normal 60px/1.4em proxima-n-w01-reg #858585",
              "f4": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f5": "normal normal normal 25px/1.4em proxima-n-w01-reg #858585",
              "f6": "normal normal normal 22px/1.4em proxima-n-w01-reg #858585",
              "f7": "normal normal normal 17px/1.4em proxima-n-w01-reg #858585",
              "f8": "normal normal normal 15px/1.4em helvetica-w01-roman #858585",
              "f9": "normal normal normal 14px/1.4em proxima-n-w01-reg #858585"
            },
            "propertiesSource": {
              "f0": "value",
              "f1": "value",
              "f10": "value",
              "f2": "value",
              "f3": "value",
              "f4": "value",
              "f5": "value",
              "f6": "value",
              "f7": "value",
              "f8": "value",
              "f9": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.WRichTextNewSkin"
        },
        "style-jhn1t6q91": {
          "type": "TopLevelStyle",
          "id": "style-jhn1t6q91",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "f0": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f1": "normal normal normal 16px/1.4em din-next-w01-light #545454",
              "f10": "normal normal normal 12px/1.4em din-next-w01-light #545454",
              "f2": "normal normal normal 28px/1.4em proxima-n-w01-reg #858585",
              "f3": "normal normal normal 60px/1.4em proxima-n-w01-reg #858585",
              "f4": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f5": "normal normal normal 25px/1.4em proxima-n-w01-reg #858585",
              "f6": "normal normal normal 22px/1.4em proxima-n-w01-reg #858585",
              "f7": "normal normal normal 17px/1.4em proxima-n-w01-reg #858585",
              "f8": "normal normal normal 15px/1.4em helvetica-w01-roman #858585",
              "f9": "normal normal normal 14px/1.4em proxima-n-w01-reg #858585"
            },
            "propertiesSource": {
              "f0": "value",
              "f1": "value",
              "f10": "value",
              "f2": "value",
              "f3": "value",
              "f4": "value",
              "f5": "value",
              "f6": "value",
              "f7": "value",
              "f8": "value",
              "f9": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.WRichTextNewSkin"
        },
        "style-jhn1t6ra1": {
          "type": "TopLevelStyle",
          "id": "style-jhn1t6ra1",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-bgh": "1",
              "alpha-brd": "1",
              "alpha-brdh": "0",
              "alpha-txt": "1",
              "alpha-txth": "1",
              "bg": "#36B5CD",
              "bgh": "#5BC9DE",
              "boxShadowToggleOn-shd": "false",
              "brd": "#545454",
              "brdh": "#F9F9F9",
              "brw": "0",
              "fnt": "normal normal normal 15px/1.4em helvetica-w01-roman #858585",
              "rd": "0px",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)",
              "txt": "#FFFFFF",
              "txth": "#FFFFFF"
            },
            "propertiesSource": {
              "alpha-brdh": "value",
              "bg": "value",
              "bgh": "value",
              "brd": "value",
              "brdh": "value",
              "brw": "value",
              "fnt": "value",
              "rd": "value",
              "shd": "value",
              "txt": "value",
              "txth": "value"
            },
            "groups": {}
          },
          "componentClassName": "wysiwyg.viewer.components.SiteButton",
          "pageId": "",
          "compId": "",
          "styleType": "custom",
          "skin": "wysiwyg.viewer.skins.button.BasicButton"
        },
        "style-jhn1zrav": {
          "type": "TopLevelStyle",
          "id": "style-jhn1zrav",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "0",
              "alpha-brd": "0",
              "bg": "61,155,233,1",
              "boxShadowToggleOn-shd": "false",
              "brd": "#324158",
              "brw": "0px",
              "rd": "0px",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)"
            },
            "propertiesSource": {
              "alpha-bg": "value",
              "alpha-brd": "value",
              "bg": "value",
              "brd": "value",
              "brw": "value",
              "rd": "value",
              "shd": "value"
            },
            "groups": {}
          },
          "componentClassName": "mobile.core.components.Container",
          "pageId": "",
          "compId": "",
          "styleType": "custom",
          "skin": "wysiwyg.viewer.skins.area.DefaultAreaSkin"
        },
        "style-jhn1ztzw": {
          "type": "TopLevelStyle",
          "id": "style-jhn1ztzw",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {},
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "wysiwyg.viewer.components.MediaContainer",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.mediaContainer.DefaultMediaContainer"
        },
        "style-jhn1zu06": {
          "type": "TopLevelStyle",
          "id": "style-jhn1zu06",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {},
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.photo.NoSkinPhoto"
        },
        "style-jhn1zu1o1": {
          "type": "TopLevelStyle",
          "id": "style-jhn1zu1o1",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-brd": "1",
              "bg": "#FFFFFF",
              "boxShadowToggleOn-shd": "false",
              "brd": "#858585",
              "brw": "0",
              "rd": "0px",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)"
            },
            "propertiesSource": {
              "bg": "value",
              "brd": "value",
              "brw": "value",
              "rd": "value",
              "shd": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.area.DefaultAreaSkin"
        },
        "style-jhn1zu21": {
          "type": "TopLevelStyle",
          "id": "style-jhn1zu21",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "f0": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f1": "normal normal normal 16px/1.4em din-next-w01-light #545454",
              "f10": "normal normal normal 12px/1.4em din-next-w01-light #545454",
              "f2": "normal normal normal 28px/1.4em proxima-n-w01-reg #858585",
              "f3": "normal normal normal 60px/1.4em proxima-n-w01-reg #858585",
              "f4": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f5": "normal normal normal 25px/1.4em proxima-n-w01-reg #858585",
              "f6": "normal normal normal 22px/1.4em proxima-n-w01-reg #858585",
              "f7": "normal normal normal 17px/1.4em proxima-n-w01-reg #858585",
              "f8": "normal normal normal 15px/1.4em helvetica-w01-roman #858585",
              "f9": "normal normal normal 14px/1.4em proxima-n-w01-reg #858585"
            },
            "propertiesSource": {
              "f0": "value",
              "f1": "value",
              "f10": "value",
              "f2": "value",
              "f3": "value",
              "f4": "value",
              "f5": "value",
              "f6": "value",
              "f7": "value",
              "f8": "value",
              "f9": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.WRichTextNewSkin"
        },
        "style-jhn1zu35": {
          "type": "TopLevelStyle",
          "id": "style-jhn1zu35",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "f0": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f1": "normal normal normal 16px/1.4em din-next-w01-light #545454",
              "f10": "normal normal normal 12px/1.4em din-next-w01-light #545454",
              "f2": "normal normal normal 28px/1.4em proxima-n-w01-reg #858585",
              "f3": "normal normal normal 60px/1.4em proxima-n-w01-reg #858585",
              "f4": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f5": "normal normal normal 25px/1.4em proxima-n-w01-reg #858585",
              "f6": "normal normal normal 22px/1.4em proxima-n-w01-reg #858585",
              "f7": "normal normal normal 17px/1.4em proxima-n-w01-reg #858585",
              "f8": "normal normal normal 15px/1.4em helvetica-w01-roman #858585",
              "f9": "normal normal normal 14px/1.4em proxima-n-w01-reg #858585"
            },
            "propertiesSource": {
              "f0": "value",
              "f1": "value",
              "f10": "value",
              "f2": "value",
              "f3": "value",
              "f4": "value",
              "f5": "value",
              "f6": "value",
              "f7": "value",
              "f8": "value",
              "f9": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.WRichTextNewSkin"
        },
        "style-jhn1zu3s1": {
          "type": "TopLevelStyle",
          "id": "style-jhn1zu3s1",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "f0": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f1": "normal normal normal 16px/1.4em din-next-w01-light #545454",
              "f10": "normal normal normal 12px/1.4em din-next-w01-light #545454",
              "f2": "normal normal normal 28px/1.4em proxima-n-w01-reg #858585",
              "f3": "normal normal normal 60px/1.4em proxima-n-w01-reg #858585",
              "f4": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f5": "normal normal normal 25px/1.4em proxima-n-w01-reg #858585",
              "f6": "normal normal normal 22px/1.4em proxima-n-w01-reg #858585",
              "f7": "normal normal normal 17px/1.4em proxima-n-w01-reg #858585",
              "f8": "normal normal normal 15px/1.4em helvetica-w01-roman #858585",
              "f9": "normal normal normal 14px/1.4em proxima-n-w01-reg #858585"
            },
            "propertiesSource": {
              "f0": "value",
              "f1": "value",
              "f10": "value",
              "f2": "value",
              "f3": "value",
              "f4": "value",
              "f5": "value",
              "f6": "value",
              "f7": "value",
              "f8": "value",
              "f9": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.WRichTextNewSkin"
        },
        "style-jhn1zu4k1": {
          "type": "TopLevelStyle",
          "id": "style-jhn1zu4k1",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "f0": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f1": "normal normal normal 16px/1.4em din-next-w01-light #545454",
              "f10": "normal normal normal 12px/1.4em din-next-w01-light #545454",
              "f2": "normal normal normal 28px/1.4em proxima-n-w01-reg #858585",
              "f3": "normal normal normal 60px/1.4em proxima-n-w01-reg #858585",
              "f4": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f5": "normal normal normal 25px/1.4em proxima-n-w01-reg #858585",
              "f6": "normal normal normal 22px/1.4em proxima-n-w01-reg #858585",
              "f7": "normal normal normal 17px/1.4em proxima-n-w01-reg #858585",
              "f8": "normal normal normal 15px/1.4em helvetica-w01-roman #858585",
              "f9": "normal normal normal 14px/1.4em proxima-n-w01-reg #858585"
            },
            "propertiesSource": {
              "f0": "value",
              "f1": "value",
              "f10": "value",
              "f2": "value",
              "f3": "value",
              "f4": "value",
              "f5": "value",
              "f6": "value",
              "f7": "value",
              "f8": "value",
              "f9": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.WRichTextNewSkin"
        },
        "style-jhn1zu5l1": {
          "type": "TopLevelStyle",
          "id": "style-jhn1zu5l1",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "f0": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f1": "normal normal normal 16px/1.4em din-next-w01-light #545454",
              "f10": "normal normal normal 12px/1.4em din-next-w01-light #545454",
              "f2": "normal normal normal 28px/1.4em proxima-n-w01-reg #858585",
              "f3": "normal normal normal 60px/1.4em proxima-n-w01-reg #858585",
              "f4": "normal normal normal 40px/1.4em proxima-n-w01-reg #858585",
              "f5": "normal normal normal 25px/1.4em proxima-n-w01-reg #858585",
              "f6": "normal normal normal 22px/1.4em proxima-n-w01-reg #858585",
              "f7": "normal normal normal 17px/1.4em proxima-n-w01-reg #858585",
              "f8": "normal normal normal 15px/1.4em helvetica-w01-roman #858585",
              "f9": "normal normal normal 14px/1.4em proxima-n-w01-reg #858585"
            },
            "propertiesSource": {
              "f0": "value",
              "f1": "value",
              "f10": "value",
              "f2": "value",
              "f3": "value",
              "f4": "value",
              "f5": "value",
              "f6": "value",
              "f7": "value",
              "f8": "value",
              "f9": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.WRichTextNewSkin"
        },
        "style-jhn1zu6e1": {
          "type": "TopLevelStyle",
          "id": "style-jhn1zu6e1",
          "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-bgh": "1",
              "alpha-brd": "1",
              "alpha-brdh": "0",
              "alpha-txt": "1",
              "alpha-txth": "1",
              "bg": "#36B5CD",
              "bgh": "#5BC9DE",
              "boxShadowToggleOn-shd": "false",
              "brd": "#545454",
              "brdh": "#F9F9F9",
              "brw": "0",
              "fnt": "normal normal normal 15px/1.4em helvetica-w01-roman #858585",
              "rd": "0px",
              "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)",
              "txt": "#FFFFFF",
              "txth": "#FFFFFF"
            },
            "propertiesSource": {
              "alpha-brdh": "value",
              "bg": "value",
              "bgh": "value",
              "brd": "value",
              "brdh": "value",
              "brw": "value",
              "fnt": "value",
              "rd": "value",
              "shd": "value",
              "txt": "value",
              "txth": "value"
            },
            "groups": {}
          },
          "componentClassName": "wysiwyg.viewer.components.SiteButton",
          "pageId": "",
          "compId": "",
          "styleType": "custom",
          "skin": "wysiwyg.viewer.skins.button.BasicButton"
        },
        "tf1": {
          "type": "TopLevelStyle",
          "id": "tf1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {},
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "skins.core.TwitterFollowSkin"
        },
        "tm1": {
          "type": "TopLevelStyle",
          "id": "tm1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "0",
              "alpha-bgDrop": "1",
              "alpha-bgOpen": "0",
              "alpha-borderColorSelected": "1",
              "alpha-bordercolor": "1",
              "alpha-iconcolor": "1",
              "alpha-iconcolorSelected": "1",
              "alpha-separatorColor": "0.5",
              "bg": "color_14",
              "bgDrop": "color_12",
              "bgOpen": "color_14",
              "borderColorSelected": "color_11",
              "borderWidthSelected": "0px",
              "bordercolor": "color_11",
              "borderwidth": "0",
              "fnt": "normal normal normal 16px/1.4em proxima-n-w01-reg",
              "iconcolor": "color_15",
              "iconcolorSelected": "color_15",
              "linewidth": "20px",
              "rd": "4px",
              "separatorColor": "color_15",
              "separatorHeight": "1px",
              "separatorWidthFull": "160",
              "strokewidth": "3",
              "textAlignment": "center",
              "txt": "color_15",
              "txts": "color_18"
            },
            "propertiesSource": {
              "alpha-bg": "value",
              "alpha-bgDrop": "value",
              "alpha-bgOpen": "value",
              "alpha-borderColorSelected": "value",
              "alpha-bordercolor": "value",
              "alpha-iconcolor": "value",
              "alpha-iconcolorSelected": "value",
              "alpha-separatorColor": "value",
              "bg": "theme",
              "bgDrop": "theme",
              "bgOpen": "value",
              "borderColorSelected": "theme",
              "borderWidthSelected": "value",
              "bordercolor": "theme",
              "borderwidth": "value",
              "fnt": "value",
              "iconcolor": "theme",
              "iconcolorSelected": "theme",
              "linewidth": "value",
              "rd": "value",
              "separatorColor": "theme",
              "separatorHeight": "value",
              "separatorWidthFull": "value",
              "strokewidth": "value",
              "textAlignment": "value",
              "txt": "theme",
              "txts": "theme"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.mobile.TinyMenuFullScreenSkin"
        },
        "tm2": {
          "type": "TopLevelStyle",
          "id": "tm2",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-bgDrop": "1",
              "alpha-bgOpen": "0",
              "alpha-borderColorSelected": "1",
              "alpha-bordercolor": "1",
              "alpha-iconcolor": "1",
              "alpha-iconcolorSelected": "1",
              "alpha-separatorColor": "0.5",
              "bg": "color_15",
              "bgDrop": "color_15",
              "bgOpen": "color_11",
              "borderColorSelected": "color_13",
              "borderWidthSelected": "0",
              "bordercolor": "color_13",
              "borderwidth": "0",
              "fnt": "normal normal normal 16px/1.4em proxima-n-w01-reg",
              "iconcolor": "color_11",
              "iconcolorSelected": "color_11",
              "linewidth": "20px",
              "rd": "0px 0px 0px 0px",
              "separatorColor": "color_15",
              "separatorHeight": "1px",
              "separatorWidth": "90",
              "strokewidth": "3",
              "textAlignment": "right",
              "txt": "color_11",
              "txts": "color_18"
            },
            "propertiesSource": {
              "alpha-bg": "value",
              "alpha-bgDrop": "value",
              "alpha-bgOpen": "value",
              "alpha-borderColorSelected": "value",
              "alpha-bordercolor": "value",
              "alpha-iconcolor": "value",
              "alpha-iconcolorSelected": "value",
              "alpha-separatorColor": "value",
              "bg": "theme",
              "bgDrop": "theme",
              "bgOpen": "theme",
              "borderColorSelected": "theme",
              "borderWidthSelected": "value",
              "bordercolor": "theme",
              "borderwidth": "value",
              "fnt": "value",
              "iconcolor": "theme",
              "iconcolorSelected": "theme",
              "linewidth": "value",
              "rd": "value",
              "separatorColor": "theme",
              "separatorHeight": "value",
              "separatorWidth": "value",
              "strokewidth": "value",
              "textAlignment": "value",
              "txt": "theme",
              "txts": "theme"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.mobile.TinyMenuPullFromRightSkin"
        },
        "tmFull1": {
          "type": "TopLevelStyle",
          "id": "tmFull1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "0",
              "alpha-bgDrop": "1",
              "alpha-bgOpen": "0",
              "alpha-borderColorSelected": "1",
              "alpha-bordercolor": "1",
              "alpha-iconcolor": "1",
              "alpha-iconcolorSelected": "1",
              "alpha-separatorColor": "0.5",
              "bg": "color_14",
              "bgDrop": "color_12",
              "bgOpen": "color_14",
              "borderColorSelected": "color_11",
              "borderWidthSelected": "0px",
              "bordercolor": "color_11",
              "borderwidth": "0",
              "fnt": "normal normal normal 16px/1.4em proxima-n-w01-reg",
              "iconcolor": "color_15",
              "iconcolorSelected": "color_15",
              "linewidth": "20px",
              "rd": "4px",
              "separatorColor": "color_15",
              "separatorHeight": "1px",
              "separatorWidthFull": "160",
              "strokewidth": "3",
              "textAlignment": "center",
              "txt": "color_15",
              "txts": "color_18"
            },
            "propertiesSource": {
              "alpha-bg": "value",
              "alpha-bgDrop": "value",
              "alpha-bgOpen": "value",
              "alpha-borderColorSelected": "value",
              "alpha-bordercolor": "value",
              "alpha-iconcolor": "value",
              "alpha-iconcolorSelected": "value",
              "alpha-separatorColor": "value",
              "bg": "theme",
              "bgDrop": "theme",
              "bgOpen": "value",
              "borderColorSelected": "theme",
              "borderWidthSelected": "value",
              "bordercolor": "theme",
              "borderwidth": "value",
              "fnt": "value",
              "iconcolor": "theme",
              "iconcolorSelected": "theme",
              "linewidth": "value",
              "rd": "value",
              "separatorColor": "theme",
              "separatorHeight": "value",
              "separatorWidthFull": "value",
              "strokewidth": "value",
              "textAlignment": "value",
              "txt": "theme",
              "txts": "theme"
            },
            "groups": {}
          },
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.mobile.TinyMenuFullScreenSkin"
        },
        "tmFull2": {
          "type": "TopLevelStyle",
          "id": "tmFull2",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "0",
              "alpha-bgDrop": "1",
              "alpha-bgOpen": "0",
              "alpha-borderColorSelected": "1",
              "alpha-bordercolor": "1",
              "alpha-iconcolor": "1",
              "alpha-iconcolorSelected": "1",
              "alpha-separatorColor": "0.5",
              "bg": "color_14",
              "bgDrop": "color_12",
              "bgOpen": "color_14",
              "borderColorSelected": "color_11",
              "borderWidthSelected": "0px",
              "bordercolor": "color_11",
              "borderwidth": "0",
              "fnt": "normal normal normal 16px/1.4em proxima-n-w01-reg",
              "iconcolor": "color_15",
              "iconcolorSelected": "color_15",
              "linewidth": "20px",
              "rd": "4px",
              "separatorColor": "color_15",
              "separatorHeight": "1px",
              "separatorWidthFull": "160",
              "strokewidth": "3",
              "textAlignment": "center",
              "txt": "color_15",
              "txts": "color_18"
            },
            "propertiesSource": {
              "alpha-bg": "value",
              "alpha-bgDrop": "value",
              "alpha-bgOpen": "value",
              "alpha-borderColorSelected": "value",
              "alpha-bordercolor": "value",
              "alpha-iconcolor": "value",
              "alpha-iconcolorSelected": "value",
              "alpha-separatorColor": "value",
              "bg": "theme",
              "bgDrop": "theme",
              "bgOpen": "value",
              "borderColorSelected": "theme",
              "borderWidthSelected": "value",
              "bordercolor": "theme",
              "borderwidth": "value",
              "fnt": "value",
              "iconcolor": "theme",
              "iconcolorSelected": "theme",
              "linewidth": "value",
              "rd": "value",
              "separatorColor": "theme",
              "separatorHeight": "value",
              "separatorWidthFull": "value",
              "strokewidth": "value",
              "textAlignment": "value",
              "txt": "theme",
              "txts": "theme"
            },
            "groups": {}
          },
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.mobile.TinyMenuFullScreenSkin"
        },
        "tpas0": {
          "type": "TopLevelStyle",
          "id": "tpas0",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {},
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "wysiwyg.viewer.components.tpapps.TPASection",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.TPASectionSkin"
        },
        "tpaw0": {
          "type": "TopLevelStyle",
          "id": "tpaw0",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {},
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "wysiwyg.viewer.components.tpapps.TPAWidget",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.TPAWidgetSkin"
        },
        "twf1": {
          "type": "TopLevelStyle",
          "id": "twf1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-bg": "1",
              "alpha-bg2": "1",
              "alpha-linkColor": "1",
              "alpha-txt1": "1",
              "alpha-txt2": "1",
              "bg": "color_4",
              "bg2": "color_4",
              "brightness-bg": "0",
              "brightness-bg2": "0",
              "brightness-linkColor": "0",
              "brightness-txt1": "0",
              "brightness-txt2": "0",
              "linkColor": "color_8",
              "saturation-bg": "0",
              "saturation-bg2": "0",
              "saturation-linkColor": "0",
              "saturation-txt1": "0",
              "saturation-txt2": "0",
              "txt1": "color_8",
              "txt2": "color_8"
            }
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.TwitterFeedSkin"
        },
        "twt1": {
          "type": "TopLevelStyle",
          "id": "twt1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {},
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "skins.core.TwitterTweetSkin"
        },
        "txt1": {
          "type": "TopLevelStyle",
          "id": "txt1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "f0": "font_0",
              "f1": "font_1",
              "f10": "font_10",
              "f2": "font_2",
              "f3": "font_3",
              "f4": "font_4",
              "f5": "font_5",
              "f6": "font_6",
              "f7": "font_7",
              "f8": "font_8",
              "f9": "font_9"
            },
            "propertiesSource": {
              "f0": "theme",
              "f1": "theme",
              "f10": "theme",
              "f2": "theme",
              "f3": "theme",
              "f4": "theme",
              "f5": "theme",
              "f6": "theme",
              "f7": "theme",
              "f8": "theme",
              "f9": "theme"
            }
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.WRichTextSkin"
        },
        "txtNew": {
          "type": "TopLevelStyle",
          "id": "txtNew",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "f0": "font_0",
              "f1": "font_1",
              "f10": "font_10",
              "f2": "font_2",
              "f3": "font_3",
              "f4": "font_4",
              "f5": "font_5",
              "f6": "font_6",
              "f7": "font_7",
              "f8": "font_8",
              "f9": "font_9"
            },
            "propertiesSource": {
              "f0": "theme",
              "f1": "theme",
              "f10": "theme",
              "f2": "theme",
              "f3": "theme",
              "f4": "theme",
              "f5": "theme",
              "f6": "theme",
              "f7": "theme",
              "f8": "theme",
              "f9": "theme"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.WRichTextNewSkin"
        },
        "v1": {
          "type": "TopLevelStyle",
          "id": "v1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {},
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.VideoSkin"
        },
        "v2": {
          "type": "TopLevelStyle",
          "id": "v2",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "brd": "color_15",
              "brw": "0px",
              "rd": "0px",
              "shd": "0 1px 4px rgba(0, 0, 0, 0.6);"
            },
            "propertiesSource": {
              "brd": "theme",
              "brw": "value",
              "rd": "value",
              "shd": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.video.VideoDefault"
        },
        "vl1": {
          "type": "TopLevelStyle",
          "id": "vl1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-brd": "1",
              "brd": "color_14",
              "lnw": "1px"
            },
            "propertiesSource": {
              "brd": "theme",
              "lnw": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.line.VerticalSolidLine"
        },
        "vl2": {
          "type": "TopLevelStyle",
          "id": "vl2",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-brd": "1",
              "brd": "color_12",
              "lnw1": "3px",
              "lnw2": "2px"
            }
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.line.VerticalDoubleLine"
        },
        "vl3": {
          "type": "TopLevelStyle",
          "id": "vl3",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-brd": "1",
              "brd": "color_15",
              "lnw": "3px"
            },
            "propertiesSource": {
              "brd": "theme",
              "lnw": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.line.VerticalSolidLine"
        },
        "vl4": {
          "type": "TopLevelStyle",
          "id": "vl4",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {},
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.line.VerticalNotchDashedLine"
        },
        "wp1": {
          "type": "TopLevelStyle",
          "id": "wp1",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-brd": "1",
              "boxShadowToggleOn-shd": "false",
              "brd": "color_14",
              "brw": "5px",
              "rd": "0px",
              "shd": "0 1px 3px rgba(0, 0, 0, 0.5);"
            },
            "propertiesSource": {
              "brd": "theme",
              "brw": "value",
              "rd": "value",
              "shd": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.photo.RoundPhoto"
        },
        "wp2": {
          "type": "TopLevelStyle",
          "id": "wp2",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {},
            "propertiesSource": {},
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.photo.NoSkinPhoto"
        },
        "wp3": {
          "type": "TopLevelStyle",
          "id": "wp3",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-brd": "1",
              "brd": "color_15",
              "brw": "0px",
              "rd": "0px"
            }
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.photo.LiftedShadowPhoto"
        },
        "wp4": {
          "type": "TopLevelStyle",
          "id": "wp4",
          "metaData": {
            "isPreset": true,
            "schemaVersion": "1.0",
            "isHidden": false
          },
          "style": {
            "properties": {
              "alpha-brd": "1",
              "boxShadowToggleOn-shd": "true",
              "brd": "color_13",
              "brw": "0px",
              "rd": "0px",
              "shd": "0 2px 5px rgba(0, 0, 0, 0.15);"
            },
            "propertiesSource": {
              "brd": "theme",
              "brw": "value",
              "rd": "value",
              "shd": "value"
            },
            "groups": {}
          },
          "componentClassName": "",
          "pageId": "",
          "compId": "",
          "styleType": "system",
          "skin": "wysiwyg.viewer.skins.photo.ScotchDoubleVertical"
        }
      },
      "component_properties": {
        "SITE_PAGES": {
          "type": "PageGroupProperties",
          "metaData": {
            "schemaVersion": "1.0"
          },
          "transition": "outIn"
        },
        "TINY_MENU": {
          "type": "TinyMenuProperties",
          "metaData": {
            "schemaVersion": "2.0",
            "autoGenerated": false
          },
          "direction": "left"
        }
      },
      "mobile_hints": {
        "mobileHints-j8u779ne": {
          "type": "MobileHints",
          "id": "mobileHints-j8u779ne",
          "hidden": false
        }
      }
    }
  },
  "pages": [
    {
      "structure": {
        "type": "Page",
        "styleId": "p1",
        "id": "c1dmp",
        "components": [
          {
            "type": "RepeaterContainer",
            "styleId": "style-jhmt1glg",
            "id": "comp-jhmt1i93",
            "components": [
              {
                "type": "Container",
                "styleId": "style-jhmt1ib3",
                "id": "comp-jhmt1iaf",
                "components": [
                  {
                    "type": "Component",
                    "styleId": "style-jhmt1ibh1",
                    "id": "comp-jhmt1ib9",
                    "dataQuery": "#dataItem-jhmt1iba",
                    "layout": {
                      "width": 319,
                      "height": 349,
                      "x": 20,
                      "y": 228,
                      "scale": 1,
                      "rotationInDegrees": 0,
                      "fixedPosition": false
                    },
                    "propertyQuery": "propItem-jhmt1ibh",
                    "mobileHintsQuery": "mobileHints-jhmt1ij0",
                    "connectionQuery": "connection-jhmt1ic4",
                    "componentType": "wysiwyg.viewer.components.WPhoto"
                  },
                  {
                    "type": "Component",
                    "styleId": "style-jhmt1icy",
                    "id": "comp-jhmt1ics",
                    "dataQuery": "#dataItem-jhmt1ics1",
                    "layout": {
                      "width": 311,
                      "height": 96,
                      "x": 20,
                      "y": 98,
                      "scale": 1,
                      "rotationInDegrees": 0,
                      "fixedPosition": false
                    },
                    "propertyQuery": "propItem-jhmt1icw",
                    "mobileHintsQuery": "mobileHints-jhmt1iit",
                    "connectionQuery": "connection-jhmt1idh",
                    "componentType": "wysiwyg.viewer.components.WRichText"
                  },
                  {
                    "type": "Component",
                    "styleId": "style-jhmt1ie2",
                    "id": "comp-jhmt1idx",
                    "dataQuery": "#dataItem-jhmt1idx1",
                    "layout": {
                      "width": 306,
                      "height": 45,
                      "x": 20,
                      "y": 20,
                      "scale": 1,
                      "rotationInDegrees": 0,
                      "fixedPosition": false
                    },
                    "propertyQuery": "propItem-jhmt1ie1",
                    "mobileHintsQuery": "mobileHints-jhmt1iia",
                    "connectionQuery": "connection-jhmt1iey",
                    "componentType": "wysiwyg.viewer.components.WRichText"
                  },
                  {
                    "type": "Component",
                    "styleId": "style-jhmt1ifb",
                    "id": "comp-jhmt1if9",
                    "skin": "wysiwyg.viewer.skins.line.SolidLine",
                    "layout": {
                      "width": 319,
                      "height": 5,
                      "x": 20,
                      "y": 81,
                      "scale": 1,
                      "rotationInDegrees": 0,
                      "fixedPosition": false
                    },
                    "propertyQuery": "propItem-jhmt1ifa",
                    "mobileHintsQuery": "mobileHints-jhmt1iih",
                    "connectionQuery": "connection-jhmt1ifu",
                    "componentType": "wysiwyg.viewer.components.FiveGridLine"
                  }
                ],
                "designQuery": "#dataItem-jhmt1iak",
                "layout": {
                  "width": 361,
                  "height": 600,
                  "x": 0,
                  "y": 0,
                  "scale": 1,
                  "rotationInDegrees": 0,
                  "fixedPosition": false
                },
                "mobileHintsQuery": "mobileHints-jhmt1ii2",
                "connectionQuery": "connection-jhmt1icd",
                "componentType": "wysiwyg.viewer.components.MediaContainer"
              }
            ],
            "dataQuery": "#dataItem-jhmt1ia7",
            "skin": "wysiwyg.viewer.skins.area.DefaultAreaSkin",
            "layout": {
              "width": 758,
              "height": 1273,
              "x": 244,
              "y": -117,
              "scale": 1,
              "rotationInDegrees": 0,
              "fixedPosition": false
            },
            "propertyQuery": "propItem-jhmt1iaa",
            "mobileHintsQuery": "mobileHints-jhmt1ij9",
            "connectionQuery": "connection-jhmt1ick",
            "componentType": "wysiwyg.viewer.components.Repeater"
          },
          {
            "type": "Component",
            "styleId": "controller1",
            "id": "comp-jhmt39vv",
            "dataQuery": "#dataItem-jhmt39xj",
            "layout": {
              "width": 96,
              "height": 96,
              "x": 440,
              "y": 271,
              "scale": 1,
              "rotationInDegrees": 0,
              "fixedPosition": false
            },
            "connectionQuery": "connection-jhmt39yr",
            "componentType": "platform.components.AppController"
          }
        ],
        "mobileComponents": [
          {
            "type": "RepeaterContainer",
            "styleId": "style-jhmt1glg",
            "id": "comp-jhmt1i93",
            "components": [
              {
                "type": "Container",
                "styleId": "style-jhmt1ib3",
                "id": "comp-jhmt1iaf",
                "components": [
                  {
                    "type": "Component",
                    "styleId": "style-jhmt1ibh1",
                    "id": "comp-jhmt1ib9",
                    "dataQuery": "#dataItem-jhmt1iba",
                    "layout": {
                      "width": 280,
                      "height": 306,
                      "x": 20,
                      "y": 195,
                      "scale": 1,
                      "rotationInDegrees": 0,
                      "fixedPosition": false
                    },
                    "propertyQuery": "propItem-jhmt1ibh",
                    "mobileHintsQuery": "mobileHints-jhmt1ij0",
                    "connectionQuery": "connection-jhmt1ic4",
                    "componentType": "wysiwyg.viewer.components.WPhoto"
                  },
                  {
                    "type": "Component",
                    "styleId": "style-jhmt1icy",
                    "id": "comp-jhmt1ics",
                    "dataQuery": "#dataItem-jhmt1ics1",
                    "layout": {
                      "width": 280,
                      "height": 96,
                      "x": 20,
                      "y": 76,
                      "scale": 1,
                      "rotationInDegrees": 0,
                      "fixedPosition": false
                    },
                    "propertyQuery": "mobile_propItem-jhmt1icw",
                    "mobileHintsQuery": "mobileHints-jhmt1iit",
                    "connectionQuery": "connection-jhmt1idh",
                    "componentType": "wysiwyg.viewer.components.WRichText"
                  },
                  {
                    "type": "Component",
                    "styleId": "style-jhmt1ie2",
                    "id": "comp-jhmt1idx",
                    "dataQuery": "#dataItem-jhmt1idx1",
                    "layout": {
                      "width": 280,
                      "height": 34,
                      "x": 20,
                      "y": 23,
                      "scale": 0.8518518518518519,
                      "rotationInDegrees": 0,
                      "fixedPosition": false
                    },
                    "propertyQuery": "mobile_propItem-jhmt1ie1",
                    "mobileHintsQuery": "mobileHints-jhmt1iia",
                    "connectionQuery": "connection-jhmt1iey",
                    "componentType": "wysiwyg.viewer.components.WRichText"
                  },
                  {
                    "type": "Component",
                    "styleId": "style-jhmt1ifb",
                    "id": "comp-jhmt1if9",
                    "skin": "wysiwyg.viewer.skins.line.SolidLine",
                    "layout": {
                      "width": 280,
                      "height": 5,
                      "x": 20,
                      "y": 64,
                      "scale": 1,
                      "rotationInDegrees": 0,
                      "fixedPosition": false
                    },
                    "propertyQuery": "propItem-jhmt1ifa",
                    "mobileHintsQuery": "mobileHints-jhmt1iih",
                    "connectionQuery": "connection-jhmt1ifu",
                    "componentType": "wysiwyg.viewer.components.FiveGridLine"
                  }
                ],
                "designQuery": "#dataItem-jhmt1iak",
                "layout": {
                  "width": 320,
                  "height": 511,
                  "x": 0,
                  "y": 0,
                  "scale": 1,
                  "rotationInDegrees": 0,
                  "fixedPosition": false
                },
                "mobileHintsQuery": "mobileHints-jhmt1ii2",
                "connectionQuery": "connection-jhmt1icd",
                "componentType": "wysiwyg.viewer.components.MediaContainer"
              }
            ],
            "dataQuery": "#dataItem-jhmt1ia7",
            "skin": "wysiwyg.viewer.skins.area.DefaultAreaSkin",
            "layout": {
              "width": 320,
              "height": 2119,
              "x": 0,
              "y": 0,
              "scale": 1,
              "rotationInDegrees": 0,
              "fixedPosition": false
            },
            "propertyQuery": "propItem-jhmt1iaa",
            "mobileHintsQuery": "mobileHints-jhmt1ij9",
            "connectionQuery": "connection-jhmt1ick",
            "componentType": "wysiwyg.viewer.components.Repeater"
          },
          {
            "type": "Component",
            "styleId": "controller1",
            "id": "comp-jhmt39vv",
            "dataQuery": "#dataItem-jhmt39xj",
            "layout": {
              "width": 0,
              "height": 0,
              "x": 0,
              "y": 0,
              "scale": 1,
              "rotationInDegrees": 0,
              "fixedPosition": false
            },
            "connectionQuery": "connection-jhmt39yr",
            "componentType": "platform.components.AppController"
          }
        ],
        "dataQuery": "#c1dmp",
        "skin": "wysiwyg.viewer.skins.page.TransparentPageSkin",
        "layout": {
          "width": 1607,
          "height": 1155,
          "x": 0,
          "y": 0,
          "scale": 1,
          "rotationInDegrees": 0,
          "fixedPosition": false
        },
        "mobileHintsQuery": "mobileHints-j8u779np",
        "behaviorQuery": "behavior-jg9pfpzt",
        "connectionQuery": "connection-jhltkeer",
        "componentType": "mobile.core.components.Page"
      },
      "data": {
        "document_data": {
          "dataItem-jhmt1ia7": {
            "type": "Repeater",
            "id": "dataItem-jhmt1ia7",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "items": [
              "item1",
              "item3",
              "item2",
              "item-j9pghds4"
            ]
          },
          "dataItem-jhmt1iba": {
            "type": "Image",
            "id": "dataItem-jhmt1iba",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "2.0",
              "isHidden": false
            },
            "title": "",
            "uri": "0ad29cb9d94741debe3c0c516a8ee222.jpg",
            "description": "",
            "width": 1342,
            "height": 894,
            "alt": "",
            "crop": {
              "x": 183,
              "y": 0,
              "width": 766,
              "height": 894
            },
            "link": "#dataItem-jhmt6x7s"
          },
          "dataItem-jhmt1iba__item-j9pghds4": {
            "type": "Image",
            "id": "dataItem-jhmt1iba__item-j9pghds4",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "2.0",
              "isHidden": false
            },
            "title": "",
            "uri": "eb7b30e78b58498781b44a63c4543c39.jpg",
            "description": "",
            "width": 5760,
            "height": 3840,
            "alt": "",
            "crop": {
              "x": 2749,
              "y": 877,
              "width": 2255,
              "height": 2468
            }
          },
          "dataItem-jhmt1iba__item1": {
            "type": "Image",
            "id": "dataItem-jhmt1iba__item1",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "2.0",
              "isHidden": false
            },
            "title": "",
            "uri": "0ad29cb9d94741debe3c0c516a8ee222.jpg",
            "description": "",
            "width": 1342,
            "height": 894,
            "alt": "",
            "crop": {
              "x": 183,
              "y": 0,
              "width": 766,
              "height": 894
            },
            "link": "#dataItem-jhmt6x7j"
          },
          "dataItem-jhmt1iba__item2": {
            "type": "Image",
            "id": "dataItem-jhmt1iba__item2",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "2.0",
              "isHidden": false
            },
            "title": "",
            "uri": "1225c146e4c544c3ab8b4fc772b41373.jpg",
            "description": "",
            "width": 1382,
            "height": 922,
            "alt": "",
            "crop": {
              "x": 251,
              "y": 0,
              "width": 843,
              "height": 922
            }
          },
          "dataItem-jhmt1iba__item3": {
            "type": "Image",
            "id": "dataItem-jhmt1iba__item3",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "2.0",
              "isHidden": false
            },
            "title": "",
            "uri": "5bfb6f_19f97958a972415a8a70f3ce42e57548~mv2_d_4000_6016_s_4_2.jpg",
            "description": "",
            "width": 4000,
            "height": 6016,
            "alt": ""
          },
          "dataItem-jhmt1ics1": {
            "type": "StyledText",
            "id": "dataItem-jhmt1ics1",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "text": "<p class=\"font_7\" style=\"font-size:16px; line-height:1.5em\"><span style=\"color:#333333\"><span style=\"font-size:16px\">This is a great place to tell people more about your business, and the services you offer. Want to make this content your own? It&rsquo;s easy.</span></span></p>",
            "stylesMapId": "CK_EDITOR_PARAGRAPH_STYLES",
            "linkList": []
          },
          "dataItem-jhmt1ics1__item-j9pghds4": {
            "type": "StyledText",
            "id": "dataItem-jhmt1ics1__item-j9pghds4",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "text": "<p class=\"font_7\" style=\"font-size:16px; line-height:1.5em\"><span style=\"color:#333333\"><span style=\"font-size:16px\">This is a great place to tell people more about your business, and the services you offer. Want to make this content your own? It&rsquo;s easy.</span></span></p>",
            "stylesMapId": "CK_EDITOR_PARAGRAPH_STYLES",
            "linkList": []
          },
          "dataItem-jhmt1ics1__item1": {
            "type": "StyledText",
            "id": "dataItem-jhmt1ics1__item1",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "text": "<p class=\"font_7\" style=\"font-size:16px; line-height:1.5em\"><span style=\"color:#333333\"><span style=\"font-size:16px\">This is a great place to tell people more about your business, and the services you offer. Want to make this content your own? It&rsquo;s easy.</span></span></p>",
            "stylesMapId": "CK_EDITOR_PARAGRAPH_STYLES",
            "linkList": []
          },
          "dataItem-jhmt1ics1__item2": {
            "type": "StyledText",
            "id": "dataItem-jhmt1ics1__item2",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "text": "<p class=\"font_7\" style=\"font-size:16px; line-height:1.5em\"><span style=\"color:#333333\"><span style=\"font-size:16px\">This is a great place to tell people more about your business.</span></span></p>",
            "stylesMapId": "CK_EDITOR_PARAGRAPH_STYLES",
            "linkList": []
          },
          "dataItem-jhmt1ics1__item3": {
            "type": "StyledText",
            "id": "dataItem-jhmt1ics1__item3",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "text": "<p class=\"font_7\" style=\"font-size:16px; line-height:1.5em\"><span style=\"color:#333333\"><span style=\"font-size:16px\">This is a great place to tell people more about your business, and the services you offer. Want to make this content your own? It&rsquo;s easy. Just add your images, text and </span></span><span style=\"color:#333333\"><span style=\"font-size:16px\">links to this preset, or connect to data from your collection.</span></span></p>",
            "stylesMapId": "CK_EDITOR_PARAGRAPH_STYLES",
            "linkList": []
          },
          "dataItem-jhmt1idx1": {
            "type": "StyledText",
            "id": "dataItem-jhmt1idx1",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "text": "<h4 class=\"font_4\" style=\"font-size:30px\"><span style=\"color:#333333\"><span style=\"letter-spacing:0.08em\"><span style=\"font-family:anton,sans-serif\"><span style=\"font-size:30px\">WORK SPACES</span></span></span></span></h4>",
            "stylesMapId": "CK_EDITOR_PARAGRAPH_STYLES",
            "linkList": []
          },
          "dataItem-jhmt1idx1__item-j9pghds4": {
            "type": "StyledText",
            "id": "dataItem-jhmt1idx1__item-j9pghds4",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "text": "<h4 class=\"font_4\" style=\"font-size:30px\"><span style=\"color:#333333\"><span style=\"letter-spacing:0.08em\"><span style=\"font-family:anton,sans-serif\"><span style=\"font-size:30px\">GALLERIES</span></span></span></span></h4>",
            "stylesMapId": "CK_EDITOR_PARAGRAPH_STYLES",
            "linkList": []
          },
          "dataItem-jhmt1idx1__item1": {
            "type": "StyledText",
            "id": "dataItem-jhmt1idx1__item1",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "text": "<h4 class=\"font_4\" style=\"font-size:30px\"><span style=\"color:#333333\"><span style=\"letter-spacing:0.08em\"><span style=\"font-family:anton,sans-serif\"><span style=\"font-size:30px\">WORK SPACES</span></span></span></span></h4>",
            "stylesMapId": "CK_EDITOR_PARAGRAPH_STYLES",
            "linkList": []
          },
          "dataItem-jhmt1idx1__item2": {
            "type": "StyledText",
            "id": "dataItem-jhmt1idx1__item2",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "text": "<h4 class=\"font_4\" style=\"font-size:30px\"><span style=\"color:#333333\"><span style=\"letter-spacing:0.08em\"><span style=\"font-family:anton,sans-serif\"><span style=\"font-size:30px\">SHOWROOMS</span></span></span></span></h4>",
            "stylesMapId": "CK_EDITOR_PARAGRAPH_STYLES",
            "linkList": []
          },
          "dataItem-jhmt1idx1__item3": {
            "type": "StyledText",
            "id": "dataItem-jhmt1idx1__item3",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "text": "<h4 class=\"font_4\" style=\"font-size:30px\"><span style=\"color:#333333\"><span style=\"letter-spacing:0.08em\"><span style=\"font-family:anton,sans-serif\"><span style=\"font-size:30px\">MEETING HALL&nbsp;</span></span></span></span></h4>",
            "stylesMapId": "CK_EDITOR_PARAGRAPH_STYLES",
            "linkList": []
          },
          "dataItem-jhmt39xj": {
            "type": "AppController",
            "id": "dataItem-jhmt39xj",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "applicationId": "dataBinding",
            "name": "Categories dataset",
            "controllerType": "dataset",
            "settings": "{\"dataset\":{\"collectionName\":\"categories\",\"readWriteType\":\"READ\",\"filter\":null,\"sort\":null,\"includes\":null,\"pageSize\":20}}"
          },
          "dataItem-jhmt6x7j": {
            "type": "PageLink",
            "id": "dataItem-jhmt6x7j",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "pageId": "#f5tcp"
          },
          "dataItem-jhmt6x7s": {
            "type": "PageLink",
            "id": "dataItem-jhmt6x7s",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "pageId": "#f5tcp"
          }
        },
        "design_data": {
          "dataItem-jhmt1iak": {
            "type": "MediaContainerDesignData",
            "id": "dataItem-jhmt1iak",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "background": "#dataItem-jhmt1ihk",
            "cssStyle": {
              "cssBorder": {
                "width": {
                  "top": {
                    "value": 0,
                    "unit": "px"
                  },
                  "right": {
                    "value": 0,
                    "unit": "px"
                  },
                  "bottom": {
                    "value": 0,
                    "unit": "px"
                  },
                  "left": {
                    "value": 0,
                    "unit": "px"
                  }
                },
                "style": {
                  "top": "solid",
                  "right": "solid",
                  "left": "solid",
                  "bottom": "solid"
                },
                "color": {
                  "top": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "right": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "left": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "bottom": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  }
                }
              },
              "cssBorderRadius": {
                "topLeft": {
                  "value": 0,
                  "unit": "px"
                },
                "topRight": {
                  "value": 0,
                  "unit": "px"
                },
                "bottomLeft": {
                  "value": 0,
                  "unit": "px"
                },
                "bottomRight": {
                  "value": 0,
                  "unit": "px"
                }
              },
              "cssBoxShadow": [
                {
                  "inset": false,
                  "offsetX": {
                    "value": 0,
                    "unit": "px"
                  },
                  "offsetY": {
                    "value": 0,
                    "unit": "px"
                  },
                  "blurRadius": {
                    "value": 13,
                    "unit": "px"
                  },
                  "spreadRadius": {
                    "value": 0,
                    "unit": "px"
                  },
                  "color": {
                    "red": 0,
                    "green": 0,
                    "blue": 0,
                    "alpha": 0.1
                  }
                }
              ]
            },
            "themeMappings": {},
            "charas": "design-j9psyr4o",
            "dataChangeBehaviors": []
          },
          "dataItem-jhmt1iak__item-j9pghds4": {
            "type": "MediaContainerDesignData",
            "id": "dataItem-jhmt1iak__item-j9pghds4",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "background": "#dataItem-jhmt1ib2",
            "cssStyle": {
              "cssBorder": {
                "width": {
                  "top": {
                    "value": 0,
                    "unit": "px"
                  },
                  "right": {
                    "value": 0,
                    "unit": "px"
                  },
                  "bottom": {
                    "value": 0,
                    "unit": "px"
                  },
                  "left": {
                    "value": 0,
                    "unit": "px"
                  }
                },
                "style": {
                  "top": "solid",
                  "right": "solid",
                  "left": "solid",
                  "bottom": "solid"
                },
                "color": {
                  "top": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "right": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "left": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "bottom": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  }
                }
              },
              "cssBorderRadius": {
                "topLeft": {
                  "value": 0,
                  "unit": "px"
                },
                "topRight": {
                  "value": 0,
                  "unit": "px"
                },
                "bottomLeft": {
                  "value": 0,
                  "unit": "px"
                },
                "bottomRight": {
                  "value": 0,
                  "unit": "px"
                }
              },
              "cssBoxShadow": [
                {
                  "inset": false,
                  "offsetX": {
                    "value": 0,
                    "unit": "px"
                  },
                  "offsetY": {
                    "value": 0,
                    "unit": "px"
                  },
                  "blurRadius": {
                    "value": 13,
                    "unit": "px"
                  },
                  "spreadRadius": {
                    "value": 0,
                    "unit": "px"
                  },
                  "color": {
                    "red": 0,
                    "green": 0,
                    "blue": 0,
                    "alpha": 0.1
                  }
                }
              ]
            },
            "themeMappings": {},
            "charas": "design-j9psyr4t",
            "dataChangeBehaviors": []
          },
          "dataItem-jhmt1iak__item1": {
            "type": "MediaContainerDesignData",
            "id": "dataItem-jhmt1iak__item1",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "background": "#dataItem-jhmt1iay",
            "cssStyle": {
              "cssBorder": {
                "width": {
                  "top": {
                    "value": 0,
                    "unit": "px"
                  },
                  "right": {
                    "value": 0,
                    "unit": "px"
                  },
                  "bottom": {
                    "value": 0,
                    "unit": "px"
                  },
                  "left": {
                    "value": 0,
                    "unit": "px"
                  }
                },
                "style": {
                  "top": "solid",
                  "right": "solid",
                  "left": "solid",
                  "bottom": "solid"
                },
                "color": {
                  "top": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "right": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "left": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "bottom": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  }
                }
              },
              "cssBorderRadius": {
                "topLeft": {
                  "value": 0,
                  "unit": "px"
                },
                "topRight": {
                  "value": 0,
                  "unit": "px"
                },
                "bottomLeft": {
                  "value": 0,
                  "unit": "px"
                },
                "bottomRight": {
                  "value": 0,
                  "unit": "px"
                }
              },
              "cssBoxShadow": [
                {
                  "inset": false,
                  "offsetX": {
                    "value": 0,
                    "unit": "px"
                  },
                  "offsetY": {
                    "value": 0,
                    "unit": "px"
                  },
                  "blurRadius": {
                    "value": 13,
                    "unit": "px"
                  },
                  "spreadRadius": {
                    "value": 0,
                    "unit": "px"
                  },
                  "color": {
                    "red": 0,
                    "green": 0,
                    "blue": 0,
                    "alpha": 0.1
                  }
                }
              ]
            },
            "themeMappings": {},
            "charas": "design-j9psyr4o",
            "dataChangeBehaviors": []
          },
          "dataItem-jhmt1iak__item2": {
            "type": "MediaContainerDesignData",
            "id": "dataItem-jhmt1iak__item2",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "background": "#dataItem-jhmt1ib1",
            "cssStyle": {
              "cssBorder": {
                "width": {
                  "top": {
                    "value": 0,
                    "unit": "px"
                  },
                  "right": {
                    "value": 0,
                    "unit": "px"
                  },
                  "bottom": {
                    "value": 0,
                    "unit": "px"
                  },
                  "left": {
                    "value": 0,
                    "unit": "px"
                  }
                },
                "style": {
                  "top": "solid",
                  "right": "solid",
                  "left": "solid",
                  "bottom": "solid"
                },
                "color": {
                  "top": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "right": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "left": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "bottom": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  }
                }
              },
              "cssBorderRadius": {
                "topLeft": {
                  "value": 0,
                  "unit": "px"
                },
                "topRight": {
                  "value": 0,
                  "unit": "px"
                },
                "bottomLeft": {
                  "value": 0,
                  "unit": "px"
                },
                "bottomRight": {
                  "value": 0,
                  "unit": "px"
                }
              },
              "cssBoxShadow": [
                {
                  "inset": false,
                  "offsetX": {
                    "value": 0,
                    "unit": "px"
                  },
                  "offsetY": {
                    "value": 0,
                    "unit": "px"
                  },
                  "blurRadius": {
                    "value": 13,
                    "unit": "px"
                  },
                  "spreadRadius": {
                    "value": 0,
                    "unit": "px"
                  },
                  "color": {
                    "red": 0,
                    "green": 0,
                    "blue": 0,
                    "alpha": 0.1
                  }
                }
              ]
            },
            "themeMappings": {},
            "charas": "design-j9psyr4r",
            "dataChangeBehaviors": []
          },
          "dataItem-jhmt1iak__item3": {
            "type": "MediaContainerDesignData",
            "id": "dataItem-jhmt1iak__item3",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "background": "#dataItem-jhmt1ib0",
            "cssStyle": {
              "cssBorder": {
                "width": {
                  "top": {
                    "value": 0,
                    "unit": "px"
                  },
                  "right": {
                    "value": 0,
                    "unit": "px"
                  },
                  "bottom": {
                    "value": 0,
                    "unit": "px"
                  },
                  "left": {
                    "value": 0,
                    "unit": "px"
                  }
                },
                "style": {
                  "top": "solid",
                  "right": "solid",
                  "left": "solid",
                  "bottom": "solid"
                },
                "color": {
                  "top": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "right": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "left": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "bottom": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  }
                }
              },
              "cssBorderRadius": {
                "topLeft": {
                  "value": 0,
                  "unit": "px"
                },
                "topRight": {
                  "value": 0,
                  "unit": "px"
                },
                "bottomLeft": {
                  "value": 0,
                  "unit": "px"
                },
                "bottomRight": {
                  "value": 0,
                  "unit": "px"
                }
              },
              "cssBoxShadow": [
                {
                  "inset": false,
                  "offsetX": {
                    "value": 0,
                    "unit": "px"
                  },
                  "offsetY": {
                    "value": 0,
                    "unit": "px"
                  },
                  "blurRadius": {
                    "value": 13,
                    "unit": "px"
                  },
                  "spreadRadius": {
                    "value": 0,
                    "unit": "px"
                  },
                  "color": {
                    "red": 0,
                    "green": 0,
                    "blue": 0,
                    "alpha": 0.1
                  }
                }
              ]
            },
            "themeMappings": {},
            "charas": "design-j9psyr4s",
            "dataChangeBehaviors": []
          },
          "dataItem-jhmt1iay": {
            "type": "BackgroundMedia",
            "id": "dataItem-jhmt1iay",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "color": "#FFFFFF",
            "colorOpacity": 1,
            "alignType": "center",
            "fittingType": "fill",
            "scrollType": "none",
            "colorOverlay": "",
            "colorOverlayOpacity": 0,
            "showOverlayForMediaType": "WixVideo",
            "mediaTransforms": {
              "scale": 1
            }
          },
          "dataItem-jhmt1ib0": {
            "type": "BackgroundMedia",
            "id": "dataItem-jhmt1ib0",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "color": "#FFFFFF",
            "colorOpacity": 1,
            "alignType": "center",
            "fittingType": "fill",
            "scrollType": "none",
            "colorOverlay": "",
            "colorOverlayOpacity": 0,
            "showOverlayForMediaType": "WixVideo",
            "mediaTransforms": {
              "scale": 1
            }
          },
          "dataItem-jhmt1ib1": {
            "type": "BackgroundMedia",
            "id": "dataItem-jhmt1ib1",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "color": "#FFFFFF",
            "colorOpacity": 1,
            "alignType": "center",
            "fittingType": "fill",
            "scrollType": "none",
            "colorOverlay": "",
            "colorOverlayOpacity": 0,
            "showOverlayForMediaType": "WixVideo",
            "mediaTransforms": {
              "scale": 1
            }
          },
          "dataItem-jhmt1ib2": {
            "type": "BackgroundMedia",
            "id": "dataItem-jhmt1ib2",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "color": "#FFFFFF",
            "colorOpacity": 1,
            "alignType": "center",
            "fittingType": "fill",
            "scrollType": "none",
            "colorOverlay": "",
            "colorOverlayOpacity": 0,
            "showOverlayForMediaType": "WixVideo",
            "mediaTransforms": {
              "scale": 1
            }
          },
          "dataItem-jhmt1ihk": {
            "type": "BackgroundMedia",
            "id": "dataItem-jhmt1ihk",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "color": "#FFFFFF",
            "colorOpacity": 1,
            "alignType": "center",
            "fittingType": "fill",
            "scrollType": "none",
            "colorOverlay": "",
            "colorOverlayOpacity": 0,
            "showOverlayForMediaType": "WixVideo",
            "mediaTransforms": {
              "scale": 1
            }
          }
        },
        "behaviors_data": {
          "behavior-jg9pfpzt": {
            "type": "ObsoleteBehaviorsList",
            "id": "behavior-jg9pfpzt",
            "items": "[]"
          }
        },
        "connections_data": {
          "connection-jhltkeer": {
            "type": "ConnectionList",
            "id": "connection-jhltkeer",
            "items": [
              {
                "type": "WixCodeConnectionItem",
                "role": "page1"
              }
            ]
          },
          "connection-jhmt1ic4": {
            "type": "ConnectionList",
            "id": "connection-jhmt1ic4",
            "items": [
              {
                "type": "WixCodeConnectionItem",
                "role": "image1"
              },
              {
                "type": "ConnectionItem",
                "role": "imageRole",
                "controllerId": "dataItem-jhmt39xj",
                "config": "{\"properties\":{\"src\":{\"fieldName\":\"photo\"}}}",
                "isPrimary": false
              }
            ]
          },
          "connection-jhmt1icd": {
            "type": "ConnectionList",
            "id": "connection-jhmt1icd",
            "items": [
              {
                "type": "WixCodeConnectionItem",
                "role": "container1"
              }
            ]
          },
          "connection-jhmt1ick": {
            "type": "ConnectionList",
            "id": "connection-jhmt1ick",
            "items": [
              {
                "type": "WixCodeConnectionItem",
                "role": "repeater1"
              },
              {
                "type": "ConnectionItem",
                "role": "repeaterRole",
                "controllerId": "dataItem-jhmt39xj",
                "isPrimary": false
              }
            ]
          },
          "connection-jhmt1idh": {
            "type": "ConnectionList",
            "id": "connection-jhmt1idh",
            "items": [
              {
                "type": "WixCodeConnectionItem",
                "role": "text1"
              }
            ]
          },
          "connection-jhmt1iey": {
            "type": "ConnectionList",
            "id": "connection-jhmt1iey",
            "items": [
              {
                "type": "WixCodeConnectionItem",
                "role": "text2"
              },
              {
                "type": "ConnectionItem",
                "role": "textRole",
                "controllerId": "dataItem-jhmt39xj",
                "config": "{\"properties\":{\"$text\":{\"fieldName\":\"title\"}}}",
                "isPrimary": false
              }
            ]
          },
          "connection-jhmt1ifu": {
            "type": "ConnectionList",
            "id": "connection-jhmt1ifu",
            "items": [
              {
                "type": "WixCodeConnectionItem",
                "role": "line1"
              }
            ]
          },
          "connection-jhmt39yr": {
            "type": "ConnectionList",
            "id": "connection-jhmt39yr",
            "items": [
              {
                "type": "WixCodeConnectionItem",
                "role": "dataset1"
              }
            ]
          }
        },
        "theme_data": {},
        "component_properties": {
          "mobile_propItem-jhmt1icw": {
            "type": "WRichTextProperties",
            "metaData": {
              "schemaVersion": "1.0",
              "autoGenerated": true
            },
            "brightness": 1,
            "packed": false
          },
          "mobile_propItem-jhmt1ie1": {
            "type": "WRichTextProperties",
            "metaData": {
              "schemaVersion": "1.0",
              "autoGenerated": true
            },
            "brightness": 1,
            "packed": false
          },
          "propItem-jhmt1iaa": {
            "type": "CardsLayoutProperties",
            "metaData": {
              "schemaVersion": "1.0",
              "autoGenerated": false
            },
            "alignment": "left",
            "gap": {
              "vertical": 25,
              "horizontal": 25
            }
          },
          "propItem-jhmt1ibh": {
            "type": "WPhotoProperties",
            "metaData": {
              "schemaVersion": "1.0",
              "autoGenerated": false
            },
            "displayMode": "fill",
            "onClickBehavior": "goToLink"
          },
          "propItem-jhmt1icw": {
            "type": "WRichTextProperties",
            "metaData": {
              "schemaVersion": "1.0",
              "autoGenerated": false
            },
            "brightness": 1,
            "packed": true
          },
          "propItem-jhmt1ie1": {
            "type": "WRichTextProperties",
            "metaData": {
              "schemaVersion": "1.0",
              "autoGenerated": false
            },
            "brightness": 1,
            "packed": true
          },
          "propItem-jhmt1ifa": {
            "type": "FiveGridLineProperties",
            "metaData": {
              "schemaVersion": "1.0"
            },
            "fullScreenModeOn": false
          }
        },
        "mobile_hints": {
          "mobileHints-j8u779np": {
            "type": "MobileHints",
            "id": "mobileHints-j8u779np",
            "hidden": false
          },
          "mobileHints-jhmt1ii2": {
            "type": "MobileHints",
            "id": "mobileHints-jhmt1ii2",
            "author": "studio",
            "offsetX": 0,
            "offsetY": 0,
            "offsetOrigin": "leftTop",
            "recommendedScale": 1,
            "recommendedWidth": 320,
            "recommendedHeight": 511,
            "orderIndex": 0
          },
          "mobileHints-jhmt1iia": {
            "type": "MobileHints",
            "id": "mobileHints-jhmt1iia",
            "author": "studio",
            "offsetX": 20,
            "offsetY": 23,
            "offsetOrigin": "leftTop",
            "recommendedScale": 0.8518519,
            "recommendedWidth": 280,
            "recommendedHeight": 34,
            "orderIndex": 0
          },
          "mobileHints-jhmt1iih": {
            "type": "MobileHints",
            "id": "mobileHints-jhmt1iih",
            "author": "studio",
            "offsetX": 0,
            "offsetY": 7,
            "offsetOrigin": "leftBottom",
            "recommendedScale": 1,
            "recommendedWidth": 280,
            "recommendedHeight": 5,
            "orderIndex": 1
          },
          "mobileHints-jhmt1iit": {
            "type": "MobileHints",
            "id": "mobileHints-jhmt1iit",
            "author": "studio",
            "offsetX": 0,
            "offsetY": 7,
            "offsetOrigin": "leftBottom",
            "recommendedScale": 1,
            "recommendedWidth": 280,
            "recommendedHeight": 96,
            "orderIndex": 2
          },
          "mobileHints-jhmt1ij0": {
            "type": "MobileHints",
            "id": "mobileHints-jhmt1ij0",
            "author": "studio",
            "offsetX": 0,
            "offsetY": 23,
            "offsetOrigin": "leftBottom",
            "recommendedScale": 1,
            "recommendedWidth": 280,
            "recommendedHeight": 306,
            "orderIndex": 3
          },
          "mobileHints-jhmt1ij9": {
            "type": "MobileHints",
            "id": "mobileHints-jhmt1ij9",
            "author": "studio",
            "recommendedScale": 1,
            "recommendedWidth": 320,
            "recommendedHeight": 2119
          }
        }
      },
      "title": "HOME",
      "pageUriSEO": "home"
    },
    {
      "structure": {
        "type": "Page",
        "styleId": "p1",
        "id": "zfwdz",
        "components": [
          {
            "type": "Component",
            "styleId": "controller1",
            "id": "comp-jhn1iii8",
            "dataQuery": "#dataItem-jhn1iijo",
            "layout": {
              "width": 94,
              "height": 78,
              "x": 349,
              "y": 36,
              "scale": 1,
              "rotationInDegrees": 0,
              "fixedPosition": false
            },
            "connectionQuery": "connection-jhn1iijp",
            "componentType": "platform.components.AppController"
          },
          {
            "type": "Component",
            "styleId": "style-jhn1jx03",
            "id": "comp-jhn1jwz1",
            "dataQuery": "#dataItem-jhn1jx02",
            "skin": "platform.components.skins.controllerSkin",
            "layout": {
              "width": 81,
              "height": 78,
              "x": 67,
              "y": 29,
              "scale": 1,
              "rotationInDegrees": 0,
              "fixedPosition": false
            },
            "connectionQuery": "connection-jhn1jx0a",
            "componentType": "platform.components.AppController"
          },
          {
            "type": "RepeaterContainer",
            "styleId": "style-jhn1t5s8",
            "id": "comp-jhn1t6jw",
            "components": [
              {
                "type": "Container",
                "styleId": "style-jhn1t6l6",
                "id": "comp-jhn1t6l1",
                "components": [
                  {
                    "type": "Component",
                    "styleId": "style-jhn1t6ld1",
                    "id": "comp-jhn1t6la",
                    "dataQuery": "#dataItem-jhn1t6la1",
                    "skin": "wysiwyg.viewer.skins.photo.NoSkinPhoto",
                    "layout": {
                      "width": 306,
                      "height": 226,
                      "x": 0,
                      "y": 0,
                      "scale": 1,
                      "rotationInDegrees": 0,
                      "fixedPosition": false
                    },
                    "propertyQuery": "propItem-jhn1t6ld",
                    "mobileHintsQuery": "mobileHints-jhn1t6uw",
                    "connectionQuery": "connection-jhn1t6lq",
                    "componentType": "wysiwyg.viewer.components.WPhoto"
                  },
                  {
                    "type": "Container",
                    "styleId": "style-jhn1t6m61",
                    "id": "comp-jhn1t6m6",
                    "components": [],
                    "layout": {
                      "width": 180,
                      "height": 40,
                      "x": -1,
                      "y": 196,
                      "scale": 1,
                      "rotationInDegrees": 0,
                      "fixedPosition": false
                    },
                    "mobileHintsQuery": "mobileHints-jhn1t6v3",
                    "connectionQuery": "connection-jhn1t6n2",
                    "componentType": "mobile.core.components.Container"
                  }
                ],
                "designQuery": "#dataItem-jhn1t6l3",
                "layout": {
                  "width": 306,
                  "height": 427,
                  "x": 336,
                  "y": 0,
                  "scale": 1,
                  "rotationInDegrees": 0,
                  "fixedPosition": false
                },
                "mobileHintsQuery": "mobileHints-jhn1t6uq",
                "connectionQuery": "connection-jhn1t6lu",
                "componentType": "wysiwyg.viewer.components.MediaContainer"
              }
            ],
            "dataQuery": "#dataItem-jhn1t6kt",
            "skin": "wysiwyg.viewer.skins.area.DefaultAreaSkin",
            "layout": {
              "width": 980,
              "height": 427,
              "x": 218,
              "y": 20,
              "scale": 1,
              "rotationInDegrees": 0,
              "fixedPosition": false
            },
            "propertyQuery": "propItem-jhn1t6kt1",
            "mobileHintsQuery": "mobileHints-jhn1t6wd",
            "connectionQuery": "connection-jhn1t6lz",
            "componentType": "wysiwyg.viewer.components.Repeater"
          }
        ],
        "mobileComponents": [
          {
            "type": "RepeaterContainer",
            "styleId": "style-jhn1t5s8",
            "id": "comp-jhn1t6jw",
            "components": [
              {
                "type": "Container",
                "styleId": "style-jhn1t6l6",
                "id": "comp-jhn1t6l1",
                "components": [
                  {
                    "type": "Component",
                    "styleId": "style-jhn1t6ld1",
                    "id": "comp-jhn1t6la",
                    "dataQuery": "#dataItem-jhn1t6la1",
                    "skin": "wysiwyg.viewer.skins.photo.NoSkinPhoto",
                    "layout": {
                      "width": 297,
                      "height": 231,
                      "x": 12,
                      "y": 20,
                      "scale": 1,
                      "rotationInDegrees": 0,
                      "fixedPosition": false
                    },
                    "propertyQuery": "propItem-jhn1t6ld",
                    "mobileHintsQuery": "mobileHints-jhn1t6uw",
                    "connectionQuery": "connection-jhn1t6lq",
                    "componentType": "wysiwyg.viewer.components.WPhoto"
                  },
                  {
                    "type": "Container",
                    "styleId": "style-jhn1t6m61",
                    "id": "comp-jhn1t6m6",
                    "components": [],
                    "layout": {
                      "width": 164,
                      "height": 40,
                      "x": 78,
                      "y": 261,
                      "scale": 1,
                      "rotationInDegrees": 0,
                      "fixedPosition": false
                    },
                    "mobileHintsQuery": "mobileHints-jhn1t6v3",
                    "connectionQuery": "connection-jhn1t6n2",
                    "componentType": "mobile.core.components.Container"
                  }
                ],
                "designQuery": "#dataItem-jhn1t6l3",
                "layout": {
                  "width": 320,
                  "height": 321,
                  "x": 0,
                  "y": 0,
                  "scale": 1,
                  "rotationInDegrees": 0,
                  "fixedPosition": false
                },
                "mobileHintsQuery": "mobileHints-jhn1t6uq",
                "connectionQuery": "connection-jhn1t6lu",
                "componentType": "wysiwyg.viewer.components.MediaContainer"
              }
            ],
            "dataQuery": "#dataItem-jhn1t6kt",
            "skin": "wysiwyg.viewer.skins.area.DefaultAreaSkin",
            "layout": {
              "width": 320,
              "height": 341,
              "x": 0,
              "y": 0,
              "scale": 1,
              "rotationInDegrees": 0,
              "fixedPosition": false
            },
            "propertyQuery": "propItem-jhn1t6kt1",
            "mobileHintsQuery": "mobileHints-jhn1t6wd",
            "connectionQuery": "connection-jhn1t6lz",
            "componentType": "wysiwyg.viewer.components.Repeater"
          },
          {
            "type": "Component",
            "styleId": "controller1",
            "id": "comp-jhn1iii8",
            "dataQuery": "#dataItem-jhn1iijo",
            "layout": {
              "width": 0,
              "height": 0,
              "x": 0,
              "y": 0,
              "scale": 1,
              "rotationInDegrees": 0,
              "fixedPosition": false
            },
            "connectionQuery": "connection-jhn1iijp",
            "componentType": "platform.components.AppController"
          },
          {
            "type": "Component",
            "styleId": "style-jhn1jx03",
            "id": "comp-jhn1jwz1",
            "dataQuery": "#dataItem-jhn1jx02",
            "skin": "platform.components.skins.controllerSkin",
            "layout": {
              "width": 0,
              "height": 0,
              "x": 0,
              "y": 0,
              "scale": 1,
              "rotationInDegrees": 0,
              "fixedPosition": false
            },
            "connectionQuery": "connection-jhn1jx0a",
            "componentType": "platform.components.AppController"
          }
        ],
        "dataQuery": "#zfwdz",
        "skin": "wysiwyg.viewer.skins.page.TransparentPageSkin",
        "layout": {
          "width": 1607,
          "height": 500,
          "x": 0,
          "y": 0,
          "scale": 1,
          "rotationInDegrees": 0,
          "fixedPosition": false
        },
        "mobileHintsQuery": "mobileHints-jhn1iifp",
        "connectionQuery": "connection-jhn1iifl",
        "componentType": "mobile.core.components.Page"
      },
      "data": {
        "document_data": {
          "dataItem-jhn1iijo": {
            "type": "AppController",
            "id": "dataItem-jhn1iijo",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "applicationId": "dataBinding",
            "name": "Categories Item",
            "controllerType": "router_dataset"
          },
          "dataItem-jhn1jx02": {
            "type": "AppController",
            "id": "dataItem-jhn1jx02",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "applicationId": "dataBinding",
            "name": "Items dataset",
            "controllerType": "dataset",
            "settings": "{\"dataset\":{\"includes\":[\"category\"],\"readWriteType\":\"READ\",\"sort\":null,\"pageSize\":20,\"filter\":{\"$and\":[{\"category\":{\"$eq\":{\"filterId\":\"filter-1527317775732\",\"@resolver\":\"dataBinding\"}}}]},\"collectionName\":\"items\"}}"
          },
          "dataItem-jhn1t6kt": {
            "type": "Repeater",
            "id": "dataItem-jhn1t6kt",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "items": [
              "item1",
              "item2",
              "item3"
            ]
          },
          "dataItem-jhn1t6la1": {
            "type": "Image",
            "id": "dataItem-jhn1t6la1",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "2.0",
              "isHidden": false
            },
            "title": "",
            "uri": "af9daef5b5684a679caf003614294ccd.jpg",
            "description": "",
            "width": 6000,
            "height": 4000,
            "alt": "",
            "crop": {
              "x": 584,
              "y": 0,
              "width": 5416,
              "height": 4000
            }
          },
          "dataItem-jhn1t6la1__item1": {
            "type": "Image",
            "id": "dataItem-jhn1t6la1__item1",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "2.0",
              "isHidden": false
            },
            "title": "",
            "uri": "af9daef5b5684a679caf003614294ccd.jpg",
            "description": "",
            "width": 6000,
            "height": 4000,
            "alt": "",
            "crop": {
              "x": 584,
              "y": 0,
              "width": 5416,
              "height": 4000
            }
          },
          "dataItem-jhn1t6la1__item2": {
            "type": "Image",
            "id": "dataItem-jhn1t6la1__item2",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "2.0",
              "isHidden": false
            },
            "title": "",
            "uri": "5bfb6f_0d9c0ddff0e54fb99dbea4f37fe36111~mv2_d_8576_5696_s_4_2.jpg",
            "description": "",
            "width": 8576,
            "height": 5696,
            "alt": ""
          },
          "dataItem-jhn1t6la1__item3": {
            "type": "Image",
            "id": "dataItem-jhn1t6la1__item3",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "2.0",
              "isHidden": false
            },
            "title": "",
            "uri": "3273c6e2911e44059093e6011be353a5.jpg",
            "description": "",
            "width": 3959,
            "height": 2644,
            "alt": ""
          }
        },
        "design_data": {
          "dataItem-jhn1t6l3": {
            "type": "MediaContainerDesignData",
            "id": "dataItem-jhn1t6l3",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "background": "#dataItem-jhn1t6u6",
            "cssStyle": {
              "cssBorder": {
                "width": {
                  "top": {
                    "value": 0,
                    "unit": "px"
                  },
                  "right": {
                    "value": 0,
                    "unit": "px"
                  },
                  "bottom": {
                    "value": 0,
                    "unit": "px"
                  },
                  "left": {
                    "value": 0,
                    "unit": "px"
                  }
                },
                "style": {
                  "top": "solid",
                  "right": "solid",
                  "left": "solid",
                  "bottom": "solid"
                },
                "color": {
                  "top": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "right": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "left": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "bottom": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  }
                }
              },
              "cssBorderRadius": {
                "topLeft": {
                  "value": 0,
                  "unit": "px"
                },
                "topRight": {
                  "value": 0,
                  "unit": "px"
                },
                "bottomLeft": {
                  "value": 0,
                  "unit": "px"
                },
                "bottomRight": {
                  "value": 0,
                  "unit": "px"
                }
              },
              "cssBoxShadow": [
                {
                  "inset": false,
                  "offsetX": {
                    "value": 0,
                    "unit": "px"
                  },
                  "offsetY": {
                    "value": 4,
                    "unit": "px"
                  },
                  "blurRadius": {
                    "value": 10,
                    "unit": "px"
                  },
                  "spreadRadius": {
                    "value": 0,
                    "unit": "px"
                  },
                  "color": {
                    "red": 0,
                    "green": 0,
                    "blue": 0,
                    "alpha": 0.1
                  }
                }
              ]
            },
            "themeMappings": {},
            "charas": "design-j9o8atta",
            "dataChangeBehaviors": []
          },
          "dataItem-jhn1t6l3__item1": {
            "type": "MediaContainerDesignData",
            "id": "dataItem-jhn1t6l3__item1",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "background": "#dataItem-jhn1t6l4",
            "cssStyle": {
              "cssBorder": {
                "width": {
                  "top": {
                    "value": 0,
                    "unit": "px"
                  },
                  "right": {
                    "value": 0,
                    "unit": "px"
                  },
                  "bottom": {
                    "value": 0,
                    "unit": "px"
                  },
                  "left": {
                    "value": 0,
                    "unit": "px"
                  }
                },
                "style": {
                  "top": "solid",
                  "right": "solid",
                  "left": "solid",
                  "bottom": "solid"
                },
                "color": {
                  "top": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "right": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "left": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "bottom": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  }
                }
              },
              "cssBorderRadius": {
                "topLeft": {
                  "value": 0,
                  "unit": "px"
                },
                "topRight": {
                  "value": 0,
                  "unit": "px"
                },
                "bottomLeft": {
                  "value": 0,
                  "unit": "px"
                },
                "bottomRight": {
                  "value": 0,
                  "unit": "px"
                }
              },
              "cssBoxShadow": [
                {
                  "inset": false,
                  "offsetX": {
                    "value": 0,
                    "unit": "px"
                  },
                  "offsetY": {
                    "value": 4,
                    "unit": "px"
                  },
                  "blurRadius": {
                    "value": 10,
                    "unit": "px"
                  },
                  "spreadRadius": {
                    "value": 0,
                    "unit": "px"
                  },
                  "color": {
                    "red": 0,
                    "green": 0,
                    "blue": 0,
                    "alpha": 0.1
                  }
                }
              ]
            },
            "themeMappings": {},
            "charas": "design-j9o8atta",
            "dataChangeBehaviors": []
          },
          "dataItem-jhn1t6l3__item2": {
            "type": "MediaContainerDesignData",
            "id": "dataItem-jhn1t6l3__item2",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "background": "#dataItem-jhn1t6l5",
            "cssStyle": {
              "cssBorder": {
                "width": {
                  "top": {
                    "value": 0,
                    "unit": "px"
                  },
                  "right": {
                    "value": 0,
                    "unit": "px"
                  },
                  "bottom": {
                    "value": 0,
                    "unit": "px"
                  },
                  "left": {
                    "value": 0,
                    "unit": "px"
                  }
                },
                "style": {
                  "top": "solid",
                  "right": "solid",
                  "left": "solid",
                  "bottom": "solid"
                },
                "color": {
                  "top": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "right": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "left": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "bottom": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  }
                }
              },
              "cssBorderRadius": {
                "topLeft": {
                  "value": 0,
                  "unit": "px"
                },
                "topRight": {
                  "value": 0,
                  "unit": "px"
                },
                "bottomLeft": {
                  "value": 0,
                  "unit": "px"
                },
                "bottomRight": {
                  "value": 0,
                  "unit": "px"
                }
              },
              "cssBoxShadow": [
                {
                  "inset": false,
                  "offsetX": {
                    "value": 0,
                    "unit": "px"
                  },
                  "offsetY": {
                    "value": 4,
                    "unit": "px"
                  },
                  "blurRadius": {
                    "value": 10,
                    "unit": "px"
                  },
                  "spreadRadius": {
                    "value": 0,
                    "unit": "px"
                  },
                  "color": {
                    "red": 0,
                    "green": 0,
                    "blue": 0,
                    "alpha": 0.1
                  }
                }
              ]
            },
            "themeMappings": {},
            "charas": "design-j9pcqmvo",
            "dataChangeBehaviors": []
          },
          "dataItem-jhn1t6l3__item3": {
            "type": "MediaContainerDesignData",
            "id": "dataItem-jhn1t6l3__item3",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "background": "#dataItem-jhn1t6l51",
            "cssStyle": {
              "cssBorder": {
                "width": {
                  "top": {
                    "value": 0,
                    "unit": "px"
                  },
                  "right": {
                    "value": 0,
                    "unit": "px"
                  },
                  "bottom": {
                    "value": 0,
                    "unit": "px"
                  },
                  "left": {
                    "value": 0,
                    "unit": "px"
                  }
                },
                "style": {
                  "top": "solid",
                  "right": "solid",
                  "left": "solid",
                  "bottom": "solid"
                },
                "color": {
                  "top": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "right": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "left": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "bottom": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  }
                }
              },
              "cssBorderRadius": {
                "topLeft": {
                  "value": 0,
                  "unit": "px"
                },
                "topRight": {
                  "value": 0,
                  "unit": "px"
                },
                "bottomLeft": {
                  "value": 0,
                  "unit": "px"
                },
                "bottomRight": {
                  "value": 0,
                  "unit": "px"
                }
              },
              "cssBoxShadow": [
                {
                  "inset": false,
                  "offsetX": {
                    "value": 0,
                    "unit": "px"
                  },
                  "offsetY": {
                    "value": 4,
                    "unit": "px"
                  },
                  "blurRadius": {
                    "value": 10,
                    "unit": "px"
                  },
                  "spreadRadius": {
                    "value": 0,
                    "unit": "px"
                  },
                  "color": {
                    "red": 0,
                    "green": 0,
                    "blue": 0,
                    "alpha": 0.1
                  }
                }
              ]
            },
            "themeMappings": {},
            "charas": "design-j9pcqsl2",
            "dataChangeBehaviors": []
          },
          "dataItem-jhn1t6l4": {
            "type": "BackgroundMedia",
            "id": "dataItem-jhn1t6l4",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "color": "#FFFFFF",
            "colorOpacity": 1,
            "alignType": "center",
            "fittingType": "fill",
            "scrollType": "none",
            "colorOverlay": "",
            "colorOverlayOpacity": 0,
            "showOverlayForMediaType": "WixVideo",
            "mediaTransforms": {
              "scale": 1
            }
          },
          "dataItem-jhn1t6l5": {
            "type": "BackgroundMedia",
            "id": "dataItem-jhn1t6l5",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "color": "#FFFFFF",
            "colorOpacity": 1,
            "alignType": "center",
            "fittingType": "fill",
            "scrollType": "none",
            "colorOverlay": "",
            "colorOverlayOpacity": 0,
            "showOverlayForMediaType": "WixVideo",
            "mediaTransforms": {
              "scale": 1
            }
          },
          "dataItem-jhn1t6l51": {
            "type": "BackgroundMedia",
            "id": "dataItem-jhn1t6l51",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "color": "#FFFFFF",
            "colorOpacity": 1,
            "alignType": "center",
            "fittingType": "fill",
            "scrollType": "none",
            "colorOverlay": "",
            "colorOverlayOpacity": 0,
            "showOverlayForMediaType": "WixVideo",
            "mediaTransforms": {
              "scale": 1
            }
          },
          "dataItem-jhn1t6u6": {
            "type": "BackgroundMedia",
            "id": "dataItem-jhn1t6u6",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "color": "#FFFFFF",
            "colorOpacity": 1,
            "alignType": "center",
            "fittingType": "fill",
            "scrollType": "none",
            "colorOverlay": "",
            "colorOverlayOpacity": 0,
            "showOverlayForMediaType": "WixVideo",
            "mediaTransforms": {
              "scale": 1
            }
          }
        },
        "behaviors_data": {},
        "connections_data": {
          "connection-jhn1iifl": {
            "type": "ConnectionList",
            "id": "connection-jhn1iifl",
            "items": [
              {
                "type": "WixCodeConnectionItem",
                "role": "page1"
              },
              {
                "type": "ConnectionItem",
                "role": "pageRole",
                "controllerId": "dataItem-jhn1jx02",
                "isPrimary": false
              }
            ]
          },
          "connection-jhn1iijp": {
            "type": "ConnectionList",
            "id": "connection-jhn1iijp",
            "items": [
              {
                "type": "WixCodeConnectionItem",
                "role": "dynamicDataset"
              }
            ]
          },
          "connection-jhn1jx0a": {
            "type": "ConnectionList",
            "id": "connection-jhn1jx0a",
            "items": [
              {
                "type": "WixCodeConnectionItem",
                "role": "dataset1"
              },
              {
                "type": "ConnectionItem",
                "role": "detailsDatasetRole",
                "controllerId": "dataItem-jhn1iijo",
                "config": "{\"filters\":{\"filter-1527317775732\":{\"fieldName\":\"_id\"}}}",
                "isPrimary": false
              }
            ]
          },
          "connection-jhn1t6lq": {
            "type": "ConnectionList",
            "id": "connection-jhn1t6lq",
            "items": [
              {
                "type": "WixCodeConnectionItem",
                "role": "image1"
              },
              {
                "type": "ConnectionItem",
                "role": "imageRole",
                "controllerId": "dataItem-jhn1jx02",
                "config": "{\"properties\":{\"src\":{\"fieldName\":\"photo\"}}}",
                "isPrimary": false
              }
            ]
          },
          "connection-jhn1t6lu": {
            "type": "ConnectionList",
            "id": "connection-jhn1t6lu",
            "items": [
              {
                "type": "WixCodeConnectionItem",
                "role": "container1"
              }
            ]
          },
          "connection-jhn1t6lz": {
            "type": "ConnectionList",
            "id": "connection-jhn1t6lz",
            "items": [
              {
                "type": "WixCodeConnectionItem",
                "role": "repeater1"
              },
              {
                "type": "ConnectionItem",
                "role": "repeaterRole",
                "controllerId": "dataItem-jhn1jx02",
                "isPrimary": false
              }
            ]
          },
          "connection-jhn1t6n2": {
            "type": "ConnectionList",
            "id": "connection-jhn1t6n2",
            "items": [
              {
                "type": "WixCodeConnectionItem",
                "role": "box1"
              }
            ]
          }
        },
        "theme_data": {},
        "component_properties": {
          "propItem-jhn1t6kt1": {
            "type": "CardsLayoutProperties",
            "metaData": {
              "schemaVersion": "1.0",
              "autoGenerated": false
            },
            "alignment": "left",
            "gap": {
              "vertical": 30,
              "horizontal": 30
            }
          },
          "propItem-jhn1t6ld": {
            "type": "WPhotoProperties",
            "metaData": {
              "schemaVersion": "1.0",
              "autoGenerated": false
            },
            "displayMode": "fill",
            "onClickBehavior": "goToLink"
          }
        },
        "mobile_hints": {
          "mobileHints-jhn1iifp": {
            "type": "MobileHints",
            "id": "mobileHints-jhn1iifp",
            "hidden": false
          },
          "mobileHints-jhn1t6uq": {
            "type": "MobileHints",
            "id": "mobileHints-jhn1t6uq",
            "author": "studio",
            "offsetX": 0,
            "offsetY": 0,
            "offsetOrigin": "leftTop",
            "recommendedScale": 1,
            "recommendedWidth": 320,
            "orderIndex": 0
          },
          "mobileHints-jhn1t6uw": {
            "type": "MobileHints",
            "id": "mobileHints-jhn1t6uw",
            "author": "studio",
            "recommendedScale": 1,
            "recommendedWidth": 297,
            "recommendedHeight": 231
          },
          "mobileHints-jhn1t6v3": {
            "type": "MobileHints",
            "id": "mobileHints-jhn1t6v3",
            "author": "studio",
            "recommendedScale": 1,
            "recommendedWidth": 164
          },
          "mobileHints-jhn1t6wd": {
            "type": "MobileHints",
            "id": "mobileHints-jhn1t6wd",
            "author": "studio",
            "recommendedScale": 1,
            "recommendedWidth": 320
          }
        }
      },
      "title": "Categories (Title)",
      "pageUriSEO": "blank"
    },
    {
      "structure": {
        "type": "Page",
        "styleId": "p1",
        "id": "mfef0",
        "components": [
          {
            "type": "Component",
            "styleId": "controller1",
            "id": "comp-jhn1htq1",
            "dataQuery": "#dataItem-jhn1htqr",
            "layout": {
              "width": 65,
              "height": 78,
              "x": 896,
              "y": 28,
              "scale": 1,
              "rotationInDegrees": 0,
              "fixedPosition": false
            },
            "connectionQuery": "connection-jhn1htqs",
            "componentType": "platform.components.AppController"
          },
          {
            "type": "RepeaterContainer",
            "styleId": "style-jhn1zrav",
            "id": "comp-jhn1ztyi",
            "components": [
              {
                "type": "Container",
                "styleId": "style-jhn1ztzw",
                "id": "comp-jhn1ztzr",
                "components": [
                  {
                    "type": "Component",
                    "styleId": "style-jhn1zu06",
                    "id": "comp-jhn1zu02",
                    "dataQuery": "#dataItem-jhn1zu03",
                    "skin": "wysiwyg.viewer.skins.photo.NoSkinPhoto",
                    "layout": {
                      "width": 306,
                      "height": 226,
                      "x": 0,
                      "y": 0,
                      "scale": 1,
                      "rotationInDegrees": 0,
                      "fixedPosition": false
                    },
                    "propertyQuery": "propItem-jhn1zu05",
                    "mobileHintsQuery": "mobileHints-jhn1zu9t",
                    "connectionQuery": "connection-jhn1zu18",
                    "componentType": "wysiwyg.viewer.components.WPhoto"
                  },
                  {
                    "type": "Container",
                    "styleId": "style-jhn1zu1o1",
                    "id": "comp-jhn1zu1o",
                    "components": [
                      {
                        "type": "Component",
                        "styleId": "style-jhn1zu21",
                        "id": "comp-jhn1zu1w",
                        "dataQuery": "#dataItem-jhn1zu1y",
                        "skin": "wysiwyg.viewer.skins.WRichTextNewSkin",
                        "layout": {
                          "width": 159,
                          "height": 27,
                          "x": 17,
                          "y": 8,
                          "scale": 1,
                          "rotationInDegrees": 0,
                          "fixedPosition": false
                        },
                        "propertyQuery": "propItem-jhn1zu20",
                        "mobileHintsQuery": "mobileHints-jhn1zub6",
                        "connectionQuery": "connection-jhn1zu2f",
                        "componentType": "wysiwyg.viewer.components.WRichText"
                      }
                    ],
                    "layout": {
                      "width": 180,
                      "height": 40,
                      "x": -1,
                      "y": 196,
                      "scale": 1,
                      "rotationInDegrees": 0,
                      "fixedPosition": false
                    },
                    "mobileHintsQuery": "mobileHints-jhn1zu9z",
                    "connectionQuery": "connection-jhn1zu2l",
                    "componentType": "mobile.core.components.Container"
                  }
                ],
                "designQuery": "#dataItem-jhn1ztzt",
                "layout": {
                  "width": 306,
                  "height": 427,
                  "x": 336,
                  "y": 0,
                  "scale": 1,
                  "rotationInDegrees": 0,
                  "fixedPosition": false
                },
                "mobileHintsQuery": "mobileHints-jhn1zu9n",
                "connectionQuery": "connection-jhn1zu1d",
                "componentType": "wysiwyg.viewer.components.MediaContainer"
              }
            ],
            "dataQuery": "#dataItem-jhn1ztzm",
            "skin": "wysiwyg.viewer.skins.area.DefaultAreaSkin",
            "layout": {
              "width": 980,
              "height": 427,
              "x": 92,
              "y": 33,
              "scale": 1,
              "rotationInDegrees": 0,
              "fixedPosition": false
            },
            "propertyQuery": "propItem-jhn1ztzn",
            "mobileHintsQuery": "mobileHints-jhn1zubb",
            "connectionQuery": "connection-jhn1zu1i",
            "componentType": "wysiwyg.viewer.components.Repeater"
          },
          {
            "type": "Component",
            "styleId": "txtNew",
            "id": "comp-jhn2qqls",
            "dataQuery": "#dataItem-jhn2qqmu",
            "skin": "wysiwyg.viewer.skins.WRichTextNewSkin",
            "layout": {
              "width": 310,
              "height": 36,
              "x": 300,
              "y": 609,
              "scale": 1,
              "rotationInDegrees": 0,
              "fixedPosition": false
            },
            "propertyQuery": "propItem-jhn2qqq6",
            "connectionQuery": "connection-jhn2qqng",
            "componentType": "wysiwyg.viewer.components.WRichText"
          }
        ],
        "mobileComponents": [
          {
            "type": "RepeaterContainer",
            "styleId": "style-jhn1zrav",
            "id": "comp-jhn1ztyi",
            "components": [
              {
                "type": "Container",
                "styleId": "style-jhn1ztzw",
                "id": "comp-jhn1ztzr",
                "components": [
                  {
                    "type": "Component",
                    "styleId": "style-jhn1zu06",
                    "id": "comp-jhn1zu02",
                    "dataQuery": "#dataItem-jhn1zu03",
                    "skin": "wysiwyg.viewer.skins.photo.NoSkinPhoto",
                    "layout": {
                      "width": 297,
                      "height": 231,
                      "x": 12,
                      "y": 20,
                      "scale": 1,
                      "rotationInDegrees": 0,
                      "fixedPosition": false
                    },
                    "propertyQuery": "propItem-jhn1zu05",
                    "mobileHintsQuery": "mobileHints-jhn1zu9t",
                    "connectionQuery": "connection-jhn1zu18",
                    "componentType": "wysiwyg.viewer.components.WPhoto"
                  },
                  {
                    "type": "Container",
                    "styleId": "style-jhn1zu1o1",
                    "id": "comp-jhn1zu1o",
                    "components": [
                      {
                        "type": "Component",
                        "styleId": "style-jhn1zu21",
                        "id": "comp-jhn1zu1w",
                        "dataQuery": "#dataItem-jhn1zu1y",
                        "skin": "wysiwyg.viewer.skins.WRichTextNewSkin",
                        "layout": {
                          "width": 149,
                          "height": 23,
                          "x": 7,
                          "y": 7,
                          "scale": 0.8727272727272727,
                          "rotationInDegrees": 0,
                          "fixedPosition": false
                        },
                        "propertyQuery": "mobile_propItem-jhn1zu20",
                        "mobileHintsQuery": "mobileHints-jhn1zub6",
                        "connectionQuery": "connection-jhn1zu2f",
                        "componentType": "wysiwyg.viewer.components.WRichText"
                      }
                    ],
                    "layout": {
                      "width": 164,
                      "height": 55,
                      "x": 78,
                      "y": 261,
                      "scale": 1,
                      "rotationInDegrees": 0,
                      "fixedPosition": false
                    },
                    "mobileHintsQuery": "mobileHints-jhn1zu9z",
                    "connectionQuery": "connection-jhn1zu2l",
                    "componentType": "mobile.core.components.Container"
                  }
                ],
                "designQuery": "#dataItem-jhn1ztzt",
                "layout": {
                  "width": 320,
                  "height": 336,
                  "x": 0,
                  "y": 0,
                  "scale": 1,
                  "rotationInDegrees": 0,
                  "fixedPosition": false
                },
                "mobileHintsQuery": "mobileHints-jhn1zu9n",
                "connectionQuery": "connection-jhn1zu1d",
                "componentType": "wysiwyg.viewer.components.MediaContainer"
              }
            ],
            "dataQuery": "#dataItem-jhn1ztzm",
            "skin": "wysiwyg.viewer.skins.area.DefaultAreaSkin",
            "layout": {
              "width": 320,
              "height": 356,
              "x": 0,
              "y": 0,
              "scale": 1,
              "rotationInDegrees": 0,
              "fixedPosition": false
            },
            "propertyQuery": "propItem-jhn1ztzn",
            "mobileHintsQuery": "mobileHints-jhn1zubb",
            "connectionQuery": "connection-jhn1zu1i",
            "componentType": "wysiwyg.viewer.components.Repeater"
          },
          {
            "type": "Component",
            "styleId": "txtNew",
            "id": "comp-jhn2qqls",
            "dataQuery": "#dataItem-jhn2qqmu",
            "skin": "wysiwyg.viewer.skins.WRichTextNewSkin",
            "layout": {
              "width": 280,
              "height": 10,
              "x": 20,
              "y": 366,
              "scale": 1,
              "rotationInDegrees": 0,
              "fixedPosition": false
            },
            "propertyQuery": "mobile_propItem-jhn2qqq6",
            "connectionQuery": "connection-jhn2qqng",
            "componentType": "wysiwyg.viewer.components.WRichText"
          },
          {
            "type": "Component",
            "styleId": "controller1",
            "id": "comp-jhn1htq1",
            "dataQuery": "#dataItem-jhn1htqr",
            "layout": {
              "width": 0,
              "height": 0,
              "x": 0,
              "y": 0,
              "scale": 1,
              "rotationInDegrees": 0,
              "fixedPosition": false
            },
            "connectionQuery": "connection-jhn1htqs",
            "componentType": "platform.components.AppController"
          }
        ],
        "dataQuery": "#mfef0",
        "skin": "wysiwyg.viewer.skins.page.TransparentPageSkin",
        "layout": {
          "width": 1607,
          "height": 645,
          "x": 0,
          "y": 0,
          "scale": 1,
          "rotationInDegrees": 0,
          "fixedPosition": false
        },
        "mobileHintsQuery": "mobileHints-jhn1give",
        "connectionQuery": "connection-jhn1giv3",
        "componentType": "mobile.core.components.Page"
      },
      "data": {
        "document_data": {
          "dataItem-jhn1htqr": {
            "type": "AppController",
            "id": "dataItem-jhn1htqr",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "applicationId": "dataBinding",
            "name": "Categories",
            "controllerType": "router_dataset"
          },
          "dataItem-jhn1ztzm": {
            "type": "Repeater",
            "id": "dataItem-jhn1ztzm",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "items": [
              "item1",
              "item2",
              "item3"
            ]
          },
          "dataItem-jhn1zu03": {
            "type": "Image",
            "id": "dataItem-jhn1zu03",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "2.0",
              "isHidden": false
            },
            "title": "",
            "uri": "af9daef5b5684a679caf003614294ccd.jpg",
            "description": "",
            "width": 6000,
            "height": 4000,
            "alt": "",
            "crop": {
              "x": 584,
              "y": 0,
              "width": 5416,
              "height": 4000
            }
          },
          "dataItem-jhn1zu03__item1": {
            "type": "Image",
            "id": "dataItem-jhn1zu03__item1",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "2.0",
              "isHidden": false
            },
            "title": "",
            "uri": "af9daef5b5684a679caf003614294ccd.jpg",
            "description": "",
            "width": 6000,
            "height": 4000,
            "alt": "",
            "crop": {
              "x": 584,
              "y": 0,
              "width": 5416,
              "height": 4000
            }
          },
          "dataItem-jhn1zu03__item2": {
            "type": "Image",
            "id": "dataItem-jhn1zu03__item2",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "2.0",
              "isHidden": false
            },
            "title": "",
            "uri": "5bfb6f_0d9c0ddff0e54fb99dbea4f37fe36111~mv2_d_8576_5696_s_4_2.jpg",
            "description": "",
            "width": 8576,
            "height": 5696,
            "alt": ""
          },
          "dataItem-jhn1zu03__item3": {
            "type": "Image",
            "id": "dataItem-jhn1zu03__item3",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "2.0",
              "isHidden": false
            },
            "title": "",
            "uri": "3273c6e2911e44059093e6011be353a5.jpg",
            "description": "",
            "width": 3959,
            "height": 2644,
            "alt": ""
          },
          "dataItem-jhn1zu1y": {
            "type": "StyledText",
            "id": "dataItem-jhn1zu1y",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "text": "<h4 class=\"font_2\" style=\"font-size:20px\"><span style=\"font-size:20px\"><span style=\"letter-spacing:0.08em\"><span style=\"font-weight:bold\"><span style=\"color:#577083\"><span style=\"font-family:open sans,sans-serif\">HYDRA</span></span></span></span></span></h4>",
            "stylesMapId": "CK_EDITOR_PARAGRAPH_STYLES",
            "linkList": []
          },
          "dataItem-jhn1zu1y__item1": {
            "type": "StyledText",
            "id": "dataItem-jhn1zu1y__item1",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "text": "<h4 class=\"font_2\" style=\"font-size:20px\"><span style=\"font-size:20px\"><span style=\"letter-spacing:0.08em\"><span style=\"font-weight:bold\"><span style=\"color:#577083\"><span style=\"font-family:open sans,sans-serif\">HYDRA</span></span></span></span></span></h4>",
            "stylesMapId": "CK_EDITOR_PARAGRAPH_STYLES",
            "linkList": []
          },
          "dataItem-jhn1zu1y__item2": {
            "type": "StyledText",
            "id": "dataItem-jhn1zu1y__item2",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "text": "<h4 class=\"font_2\" style=\"font-size: 20px;\"><span style=\"font-size:20px\"><span style=\"letter-spacing:0.08em\"><span style=\"font-weight:bold\"><span style=\"color:#577083\"><span style=\"font-family:open sans,sans-serif\">SANTORINI</span></span></span></span></span></h4>",
            "stylesMapId": "CK_EDITOR_PARAGRAPH_STYLES",
            "linkList": []
          },
          "dataItem-jhn1zu1y__item3": {
            "type": "StyledText",
            "id": "dataItem-jhn1zu1y__item3",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "text": "<h4 class=\"font_2\" style=\"font-size:20px\"><span style=\"font-size:20px\"><span style=\"letter-spacing:0.08em\"><span style=\"font-weight:bold\"><span style=\"color:#577083\"><span style=\"font-family:open sans,sans-serif\">MYKONOS</span></span></span></span></span></h4>",
            "stylesMapId": "CK_EDITOR_PARAGRAPH_STYLES",
            "linkList": []
          },
          "dataItem-jhn2qqmu": {
            "type": "StyledText",
            "id": "dataItem-jhn2qqmu",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "text": "<p class=\"font_7\">mukmuk</p>\n\n<p class=\"font_7\"><span class=\"wixGuard\">​</span></p>",
            "stylesMapId": "CK_EDITOR_PARAGRAPH_STYLES",
            "linkList": []
          }
        },
        "design_data": {
          "dataItem-jhn1ztzt": {
            "type": "MediaContainerDesignData",
            "id": "dataItem-jhn1ztzt",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "background": "#dataItem-jhn1zu92",
            "cssStyle": {
              "cssBorder": {
                "width": {
                  "top": {
                    "value": 0,
                    "unit": "px"
                  },
                  "right": {
                    "value": 0,
                    "unit": "px"
                  },
                  "bottom": {
                    "value": 0,
                    "unit": "px"
                  },
                  "left": {
                    "value": 0,
                    "unit": "px"
                  }
                },
                "style": {
                  "top": "solid",
                  "right": "solid",
                  "left": "solid",
                  "bottom": "solid"
                },
                "color": {
                  "top": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "right": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "left": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "bottom": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  }
                }
              },
              "cssBorderRadius": {
                "topLeft": {
                  "value": 0,
                  "unit": "px"
                },
                "topRight": {
                  "value": 0,
                  "unit": "px"
                },
                "bottomLeft": {
                  "value": 0,
                  "unit": "px"
                },
                "bottomRight": {
                  "value": 0,
                  "unit": "px"
                }
              },
              "cssBoxShadow": [
                {
                  "inset": false,
                  "offsetX": {
                    "value": 0,
                    "unit": "px"
                  },
                  "offsetY": {
                    "value": 4,
                    "unit": "px"
                  },
                  "blurRadius": {
                    "value": 10,
                    "unit": "px"
                  },
                  "spreadRadius": {
                    "value": 0,
                    "unit": "px"
                  },
                  "color": {
                    "red": 0,
                    "green": 0,
                    "blue": 0,
                    "alpha": 0.1
                  }
                }
              ]
            },
            "themeMappings": {},
            "charas": "design-j9o8atta",
            "dataChangeBehaviors": []
          },
          "dataItem-jhn1ztzt__item1": {
            "type": "MediaContainerDesignData",
            "id": "dataItem-jhn1ztzt__item1",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "background": "#dataItem-jhn1ztzu",
            "cssStyle": {
              "cssBorder": {
                "width": {
                  "top": {
                    "value": 0,
                    "unit": "px"
                  },
                  "right": {
                    "value": 0,
                    "unit": "px"
                  },
                  "bottom": {
                    "value": 0,
                    "unit": "px"
                  },
                  "left": {
                    "value": 0,
                    "unit": "px"
                  }
                },
                "style": {
                  "top": "solid",
                  "right": "solid",
                  "left": "solid",
                  "bottom": "solid"
                },
                "color": {
                  "top": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "right": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "left": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "bottom": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  }
                }
              },
              "cssBorderRadius": {
                "topLeft": {
                  "value": 0,
                  "unit": "px"
                },
                "topRight": {
                  "value": 0,
                  "unit": "px"
                },
                "bottomLeft": {
                  "value": 0,
                  "unit": "px"
                },
                "bottomRight": {
                  "value": 0,
                  "unit": "px"
                }
              },
              "cssBoxShadow": [
                {
                  "inset": false,
                  "offsetX": {
                    "value": 0,
                    "unit": "px"
                  },
                  "offsetY": {
                    "value": 4,
                    "unit": "px"
                  },
                  "blurRadius": {
                    "value": 10,
                    "unit": "px"
                  },
                  "spreadRadius": {
                    "value": 0,
                    "unit": "px"
                  },
                  "color": {
                    "red": 0,
                    "green": 0,
                    "blue": 0,
                    "alpha": 0.1
                  }
                }
              ]
            },
            "themeMappings": {},
            "charas": "design-j9o8atta",
            "dataChangeBehaviors": []
          },
          "dataItem-jhn1ztzt__item2": {
            "type": "MediaContainerDesignData",
            "id": "dataItem-jhn1ztzt__item2",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "background": "#dataItem-jhn1ztzu1",
            "cssStyle": {
              "cssBorder": {
                "width": {
                  "top": {
                    "value": 0,
                    "unit": "px"
                  },
                  "right": {
                    "value": 0,
                    "unit": "px"
                  },
                  "bottom": {
                    "value": 0,
                    "unit": "px"
                  },
                  "left": {
                    "value": 0,
                    "unit": "px"
                  }
                },
                "style": {
                  "top": "solid",
                  "right": "solid",
                  "left": "solid",
                  "bottom": "solid"
                },
                "color": {
                  "top": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "right": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "left": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "bottom": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  }
                }
              },
              "cssBorderRadius": {
                "topLeft": {
                  "value": 0,
                  "unit": "px"
                },
                "topRight": {
                  "value": 0,
                  "unit": "px"
                },
                "bottomLeft": {
                  "value": 0,
                  "unit": "px"
                },
                "bottomRight": {
                  "value": 0,
                  "unit": "px"
                }
              },
              "cssBoxShadow": [
                {
                  "inset": false,
                  "offsetX": {
                    "value": 0,
                    "unit": "px"
                  },
                  "offsetY": {
                    "value": 4,
                    "unit": "px"
                  },
                  "blurRadius": {
                    "value": 10,
                    "unit": "px"
                  },
                  "spreadRadius": {
                    "value": 0,
                    "unit": "px"
                  },
                  "color": {
                    "red": 0,
                    "green": 0,
                    "blue": 0,
                    "alpha": 0.1
                  }
                }
              ]
            },
            "themeMappings": {},
            "charas": "design-j9pcqmvo",
            "dataChangeBehaviors": []
          },
          "dataItem-jhn1ztzt__item3": {
            "type": "MediaContainerDesignData",
            "id": "dataItem-jhn1ztzt__item3",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "background": "#dataItem-jhn1ztzv",
            "cssStyle": {
              "cssBorder": {
                "width": {
                  "top": {
                    "value": 0,
                    "unit": "px"
                  },
                  "right": {
                    "value": 0,
                    "unit": "px"
                  },
                  "bottom": {
                    "value": 0,
                    "unit": "px"
                  },
                  "left": {
                    "value": 0,
                    "unit": "px"
                  }
                },
                "style": {
                  "top": "solid",
                  "right": "solid",
                  "left": "solid",
                  "bottom": "solid"
                },
                "color": {
                  "top": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "right": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "left": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  },
                  "bottom": {
                    "red": 176,
                    "green": 169,
                    "blue": 134,
                    "alpha": 1
                  }
                }
              },
              "cssBorderRadius": {
                "topLeft": {
                  "value": 0,
                  "unit": "px"
                },
                "topRight": {
                  "value": 0,
                  "unit": "px"
                },
                "bottomLeft": {
                  "value": 0,
                  "unit": "px"
                },
                "bottomRight": {
                  "value": 0,
                  "unit": "px"
                }
              },
              "cssBoxShadow": [
                {
                  "inset": false,
                  "offsetX": {
                    "value": 0,
                    "unit": "px"
                  },
                  "offsetY": {
                    "value": 4,
                    "unit": "px"
                  },
                  "blurRadius": {
                    "value": 10,
                    "unit": "px"
                  },
                  "spreadRadius": {
                    "value": 0,
                    "unit": "px"
                  },
                  "color": {
                    "red": 0,
                    "green": 0,
                    "blue": 0,
                    "alpha": 0.1
                  }
                }
              ]
            },
            "themeMappings": {},
            "charas": "design-j9pcqsl2",
            "dataChangeBehaviors": []
          },
          "dataItem-jhn1ztzu": {
            "type": "BackgroundMedia",
            "id": "dataItem-jhn1ztzu",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "color": "#FFFFFF",
            "colorOpacity": 1,
            "alignType": "center",
            "fittingType": "fill",
            "scrollType": "none",
            "colorOverlay": "",
            "colorOverlayOpacity": 0,
            "showOverlayForMediaType": "WixVideo",
            "mediaTransforms": {
              "scale": 1
            }
          },
          "dataItem-jhn1ztzu1": {
            "type": "BackgroundMedia",
            "id": "dataItem-jhn1ztzu1",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "color": "#FFFFFF",
            "colorOpacity": 1,
            "alignType": "center",
            "fittingType": "fill",
            "scrollType": "none",
            "colorOverlay": "",
            "colorOverlayOpacity": 0,
            "showOverlayForMediaType": "WixVideo",
            "mediaTransforms": {
              "scale": 1
            }
          },
          "dataItem-jhn1ztzv": {
            "type": "BackgroundMedia",
            "id": "dataItem-jhn1ztzv",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "color": "#FFFFFF",
            "colorOpacity": 1,
            "alignType": "center",
            "fittingType": "fill",
            "scrollType": "none",
            "colorOverlay": "",
            "colorOverlayOpacity": 0,
            "showOverlayForMediaType": "WixVideo",
            "mediaTransforms": {
              "scale": 1
            }
          },
          "dataItem-jhn1zu92": {
            "type": "BackgroundMedia",
            "id": "dataItem-jhn1zu92",
            "metaData": {
              "isPreset": false,
              "schemaVersion": "1.0",
              "isHidden": false
            },
            "color": "#FFFFFF",
            "colorOpacity": 1,
            "alignType": "center",
            "fittingType": "fill",
            "scrollType": "none",
            "colorOverlay": "",
            "colorOverlayOpacity": 0,
            "showOverlayForMediaType": "WixVideo",
            "mediaTransforms": {
              "scale": 1
            }
          }
        },
        "behaviors_data": {},
        "connections_data": {
          "connection-jhn1giv3": {
            "type": "ConnectionList",
            "id": "connection-jhn1giv3",
            "items": [
              {
                "type": "WixCodeConnectionItem",
                "role": "page1"
              }
            ]
          },
          "connection-jhn1htqs": {
            "type": "ConnectionList",
            "id": "connection-jhn1htqs",
            "items": [
              {
                "type": "WixCodeConnectionItem",
                "role": "dynamicDataset"
              }
            ]
          },
          "connection-jhn1zu18": {
            "type": "ConnectionList",
            "id": "connection-jhn1zu18",
            "items": [
              {
                "type": "WixCodeConnectionItem",
                "role": "image1"
              },
              {
                "type": "ConnectionItem",
                "role": "imageRole",
                "controllerId": "dataItem-jhn1htqr",
                "config": "{\"properties\":{\"src\":{\"fieldName\":\"photo\"},\"alt\":{\"fieldName\":\"title\"},\"link\":{\"fieldName\":\"link-photos-title\"}}}",
                "isPrimary": false
              }
            ]
          },
          "connection-jhn1zu1d": {
            "type": "ConnectionList",
            "id": "connection-jhn1zu1d",
            "items": [
              {
                "type": "WixCodeConnectionItem",
                "role": "container1"
              }
            ]
          },
          "connection-jhn1zu1i": {
            "type": "ConnectionList",
            "id": "connection-jhn1zu1i",
            "items": [
              {
                "type": "WixCodeConnectionItem",
                "role": "repeater1"
              },
              {
                "type": "ConnectionItem",
                "role": "repeaterRole",
                "controllerId": "dataItem-jhn1htqr",
                "isPrimary": false
              }
            ]
          },
          "connection-jhn1zu2f": {
            "type": "ConnectionList",
            "id": "connection-jhn1zu2f",
            "items": [
              {
                "type": "WixCodeConnectionItem",
                "role": "text1"
              },
              {
                "type": "ConnectionItem",
                "role": "textRole",
                "controllerId": "dataItem-jhn1htqr",
                "config": "{\"properties\":{\"$text\":{\"fieldName\":\"title\"}}}",
                "isPrimary": false
              }
            ]
          },
          "connection-jhn1zu2l": {
            "type": "ConnectionList",
            "id": "connection-jhn1zu2l",
            "items": [
              {
                "type": "WixCodeConnectionItem",
                "role": "box1"
              }
            ]
          },
          "connection-jhn2qqng": {
            "type": "ConnectionList",
            "id": "connection-jhn2qqng",
            "items": [
              {
                "type": "WixCodeConnectionItem",
                "role": "text2"
              }
            ]
          }
        },
        "theme_data": {},
        "component_properties": {
          "mobile_propItem-jhn1zu20": {
            "type": "WRichTextProperties",
            "metaData": {
              "schemaVersion": "1.0",
              "autoGenerated": true
            },
            "brightness": 1,
            "packed": false
          },
          "mobile_propItem-jhn2qqq6": {
            "type": "WRichTextProperties",
            "metaData": {
              "schemaVersion": "1.0",
              "autoGenerated": true
            },
            "brightness": 1,
            "packed": false
          },
          "propItem-jhn1ztzn": {
            "type": "CardsLayoutProperties",
            "metaData": {
              "schemaVersion": "1.0",
              "autoGenerated": false
            },
            "alignment": "left",
            "gap": {
              "vertical": 30,
              "horizontal": 30
            }
          },
          "propItem-jhn1zu05": {
            "type": "WPhotoProperties",
            "metaData": {
              "schemaVersion": "1.0",
              "autoGenerated": false
            },
            "displayMode": "fill",
            "onClickBehavior": "goToLink"
          },
          "propItem-jhn1zu20": {
            "type": "WRichTextProperties",
            "metaData": {
              "schemaVersion": "1.0"
            },
            "brightness": 1,
            "packed": true
          },
          "propItem-jhn2qqq6": {
            "type": "WRichTextProperties",
            "metaData": {
              "schemaVersion": "1.0",
              "autoGenerated": false
            },
            "brightness": 1,
            "packed": true
          }
        },
        "mobile_hints": {
          "mobileHints-jhn1give": {
            "type": "MobileHints",
            "id": "mobileHints-jhn1give",
            "hidden": false
          },
          "mobileHints-jhn1zu9n": {
            "type": "MobileHints",
            "id": "mobileHints-jhn1zu9n",
            "author": "studio",
            "offsetX": 0,
            "offsetY": 0,
            "offsetOrigin": "leftTop",
            "recommendedScale": 1,
            "recommendedWidth": 320,
            "orderIndex": 0
          },
          "mobileHints-jhn1zu9t": {
            "type": "MobileHints",
            "id": "mobileHints-jhn1zu9t",
            "author": "studio",
            "recommendedScale": 1,
            "recommendedWidth": 297,
            "recommendedHeight": 231
          },
          "mobileHints-jhn1zu9z": {
            "type": "MobileHints",
            "id": "mobileHints-jhn1zu9z",
            "author": "studio",
            "recommendedScale": 1,
            "recommendedWidth": 164,
            "recommendedHeight": 55
          },
          "mobileHints-jhn1zub6": {
            "type": "MobileHints",
            "id": "mobileHints-jhn1zub6",
            "author": "studio",
            "offsetX": 7,
            "offsetY": 7,
            "offsetOrigin": "leftTop",
            "recommendedScale": 0.8727273,
            "recommendedWidth": 149,
            "recommendedHeight": 23,
            "orderIndex": 0
          },
          "mobileHints-jhn1zubb": {
            "type": "MobileHints",
            "id": "mobileHints-jhn1zubb",
            "author": "studio",
            "recommendedScale": 1,
            "recommendedWidth": 320
          }
        }
      },
      "title": "Categories (All)",
      "pageUriSEO": "categories"
    }
  ]
}