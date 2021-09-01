 // eslint-disable-next-line
export default {
  "version": 1,
  "settings": {
    "color": {
      "link": true,
      "palette": [],
      "gradients": []
    },
    "layout": {
      "contentSize": "1024px",
      "wideSize": "1240px"
    },
    "typography": {
      "customLineHeight": true,
      "fontSizes": [
        {
          "name": "Extra Small",
          "size": "9px",
          "slug": "x-small"
        },
        {
          "name": "Small",
          "size": "10px",
          "slug": "small"
        },
        {
          "name": "Normal",
          "size": "12px",
          "slug": "normal"
        },
        {
          "name": "Medium",
          "size": "16px",
          "slug": "medium"
        },
        {
          "name": "Big",
          "size": "20px",
          "slug": "big"
        }
      ],
      "fontFamilies": []
    },
    "spacing": {
      "customMargin": true,
      "customPadding": true,
      "units": [
        "px",
        "%",
        "em",
        "rem"
      ]
    },
    "border": {
      "customColor": true,
      "customRadius": true,
      "customStyle": true,
      "customWidth": true
    },
    "custom": {
      "font-primary": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
      "font-secondary": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
      "line-height": {
        "body": 1.7,
        "heading": 1.3,
        "page-title": 1.1
      },
      "spacing": {
        "unit": "20px",
        "horizontal": "25px",
        "vertical": "30px"
      },
      "font-weight": {
        "thin": "100",
        "light": "300",
        "normal": "400",
        "semi-bold": "600",
        "bold": "700"
      }
    }
  },
  "styles": {
    "color": {
      "background": "var(--wp--preset--color--green)",
      "text": "var(--wp--preset--color--dark-gray)"

    },
    "typography": {
      "fontSize": "var(--wp--preset--font-size--normal)",
      "lineHeight": "var(--wp--custom--line-height--body)"
    },
    "elements": {
      "link": {
        "color": {
          "text": "var(--wp--preset--color--dark-gray)",
          "background": "transparent",
        }
      },
      "h1": {
        "typography": {
          "fontFamily": "Lato",
          "fontSize": "40px",
          "lineHeight": "1.2",
          "fontWeight": "500"
        }
      },
      "h2": {
        "typography": {
          "fontFamily": "Lato",
          "fontSize": "30px",
          "lineHeight": "1.2",
          "fontWeight": "500"
        }
      },
      "h3": {
        "typography": {
          "fontFamily": "Lato",
          "fontSize": "28px",
          "lineHeight": "1.2",
          "fontWeight": "500"
        }
      },
      "h4": {
        "typography": {
          "fontFamily": "Lato",
          "fontSize": "24px",
          "lineHeight": "1.2",
          "fontWeight": "500"
        }
      },
      "h5": {
        "typography": {
          "fontFamily": "Lato",
          "fontSize": "20px",
          "lineHeight": "1.2",
          "fontWeight": "500"
        }
      },
      "h6": {
        "typography": {
          "fontFamily": "Lato",
          "fontSize": "16px",
          "lineHeight": "1.2",
          "fontWeight": "500"
        }
      }
    },
    "blocks": {
      "core/site-tagline": {
        "typography": {
          "fontSize": "var(--wp--preset--font-size--small)",
          "lineHeight": 1.4
        }
      },
      "core/button": {
        "border": {
          "radius": "0px"
        },
        "color": {
          "background": "var(--wp--preset--color--gray)",
          "text": "var(--wp--preset--color--green)"
        },
        "typography": {
          "fontSize": "var(--wp--preset--font-size--normal)",
          "fontWeight": 500
        }
      },
      "core/post-author": {
        "typography": {
          "fontSize": "var(--wp--preset--font-size--extra-small)",
          "lineHeight": "var(--wp--custom--line-height--body)"
        }
      },
      "core/post-date": {
        "typography": {
          "fontSize": "var(--wp--preset--font-size--extra-small)",
          "lineHeight": "var(--wp--custom--line-height--body)"
        }
      },
      "core/post-terms": {
        "typography": {
          "fontSize": "var(--wp--preset--font-size--extra-small)",
          "lineHeight": "var(--wp--custom--line-height--body)"
        }
      },
      "core/pullquote": {
        "typography": {
          "fontSize": "var(--wp--preset--font-size--small)",
          "fontWeight": "700"
        },
        "spacing": {
          "padding": {
            "top": "calc(2 * var(--wp--custom--spacing--unit))",
            "bottom": "calc(2 * var(--wp--custom--spacing--unit))",
            "left": "0",
            "right": "0"
          }
        },
        "border": {
          "radius": "0px",
          "style": "solid none",
          "width": "var(--wp--custom--border--width)"
        }
      },
      "core/site-title": {
        "typography": {
          "fontSize": "var(--wp--preset--font-size--large)",
          "fontWeight": "var(--wp--custom--font-weight--normal)",
          "textTransform": "uppercase"
        }
      },
      "core/code": {
        "spacing": {
          "padding": {
            "top": "var(--wp--custom--spacing--unit)",
            "bottom": "var(--wp--custom--spacing--unit)",
            "left": "var(--wp--custom--spacing--unit)",
            "right": "var(--wp--custom--spacing--unit)"
          }
        },
        "border": {
          "radius": "0px",
          "color": "var(--wp--preset--color--dark-gray)",
          "style": "solid",
          "width": "1.5px"
        }
      },
      "core/heading": {
        "typography": {
          "fontWeight": "var(--wp--custom--font-weight--normal)",
          "textTransform": "uppercase"
        },
        "spacing": {
          "padding": {
            "top": "var(--wp--custom--spacing--unit)",
            "bottom": "var(--wp--custom--spacing--unit)",
            "left": "var(--wp--custom--spacing--unit)",
            "right": "var(--wp--custom--spacing--unit)"
          }
        },
        "border": {
          "radius": "0px",
          "color": "var(--wp--preset--color--dark-gray)",
          "style": "solid",
          "width": "1.5px"
        }
      },
      "core/list": {
        "typography": {
          "fontWeight": "var(--wp--custom--font-weight--normal)",
          "fontSize": "var(--wp--custom--font-weight--normal)",
          "lineHeight": "1.9"
        }
      },
      "core/gallery": {
        "typography": {
          "fontWeight": "var(--wp--custom--font-weight--normal)",
          "fontSize": "var(--wp--preset--font-size--small)",
          "lineHeight": "1.9"
        }
      },
      "core/image": {
        "typography": {
          "fontWeight": "var(--wp--custom--font-weight--normal)",
          "fontSize": "var(--wp--preset--font-size--small)",
          "lineHeight": "1.9"
        }
      }
    }
  }
}