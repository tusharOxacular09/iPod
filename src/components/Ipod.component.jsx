import React, { Component, createRef } from "react";
import "./Ipod.style.css";

export default class IpodComponent extends Component {
  constructor(props) {
    super(props);
    this.menuRef = createRef();
    this.state = {
      isClicked: false,
      openMenu: false,
      openCoverFlow: false,
      circularMenuActive: false,
      startAngle: 0,
      currentAngle: 0,
      menus: {
        coverFlow: {
          isHovered: false,
          isOpened: false,
        },
        settings: {
          isHovered: false,
          isOpened: false,
        },
        games: {
          isHovered: false,
          isOpened: false,
        },
        musics: {
          isHovered: false,
          isOpened: false,
        },
        notes: {
          isHovered: false,
          isOpened: false,
        },
        socialMedia: {
          isHovered: false,
          isOpened: false,
        },
      },
    };
  }

  handelOpenMenu = () => {
    // Toggeling Menu
    this.setState((prevState) => ({ openMenu: !prevState.openMenu }));
    // Closing All Other Screens When Menu Is Toggeled.
    this.setState({
      menus: {
        coverFlow: {
          isHovered: false,
          isOpened: false,
        },
        settings: {
          isHovered: false,
          isOpened: false,
        },
        games: {
          isHovered: false,
          isOpened: false,
        },
        musics: {
          isHovered: false,
          isOpened: false,
        },
        notes: {
          isHovered: false,
          isOpened: false,
        },
        socialMedia: {
          isHovered: false,
          isOpened: false,
        },
      },
    });
  };

  handleMouseDown = (event) => {
    event.preventDefault();
    this.setState({
      circularMenuActive: true,
      startAngle: this.getAngle(event.clientX, event.clientY),
    });
  };

  handleMouseMove = (event) => {
    if (this.state.circularMenuActive && this.state.openMenu) {
      const currentAngle = this.getAngle(event.clientX, event.clientY);
      this.setState({ currentAngle });
    }
  };

  getAngle = (clientX, clientY) => {
    const rect = this.menuRef.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angleRadians = Math.atan2(clientY - centerY, clientX - centerX);
    const angleDegrees = (angleRadians * 180) / Math.PI + 180;
    return parseInt(angleDegrees);
  };

  // Prevent event propagation for the ok_button
  preventPropagation = (event) => {
    event.stopPropagation();
  };

  // Managing the menu selectors
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.currentAngle !== this.state.currentAngle &&
      this.state.openMenu
    ) {
      if (this.state.currentAngle >= 0 && this.state.currentAngle <= 60) {
        this.setState((prev) => ({
          menus: {
            coverFlow: {
              isHovered: true,
              isOpened: prev.menus.coverFlow.isOpened,
            },
            settings: {
              isHovered: false,
              isOpened: prev.menus.settings.isOpened,
            },
            games: {
              isHovered: false,
              isOpened: prev.menus.games.isOpened,
            },
            musics: {
              isHovered: false,
              isOpened: prev.menus.musics.isOpened,
            },
            notes: {
              isHovered: false,
              isOpened: prev.menus.notes.isOpened,
            },
            socialMedia: {
              isHovered: false,
              isOpened: prev.menus.socialMedia.isOpened,
            },
          },
        }));
      } else if (
        this.state.currentAngle > 60 &&
        this.state.currentAngle <= 120
      ) {
        this.setState((prev) => ({
          menus: {
            coverFlow: {
              isHovered: false,
              isOpened: prev.menus.coverFlow.isOpened,
            },
            settings: {
              isHovered: true,
              isOpened: prev.menus.settings.isOpened,
            },
            games: {
              isHovered: false,
              isOpened: prev.menus.games.isOpened,
            },
            musics: {
              isHovered: false,
              isOpened: prev.menus.musics.isOpened,
            },
            notes: {
              isHovered: false,
              isOpened: prev.menus.notes.isOpened,
            },
            socialMedia: {
              isHovered: false,
              isOpened: prev.menus.socialMedia.isOpened,
            },
          },
        }));
      } else if (
        this.state.currentAngle > 120 &&
        this.state.currentAngle <= 180
      ) {
        this.setState((prev) => ({
          menus: {
            coverFlow: {
              isHovered: false,
              isOpened: prev.menus.coverFlow.isOpened,
            },
            settings: {
              isHovered: false,
              isOpened: prev.menus.settings.isOpened,
            },
            games: {
              isHovered: true,
              isOpened: prev.menus.games.isOpened,
            },
            musics: {
              isHovered: false,
              isOpened: prev.menus.musics.isOpened,
            },
            notes: {
              isHovered: false,
              isOpened: prev.menus.notes.isOpened,
            },
            socialMedia: {
              isHovered: false,
              isOpened: prev.menus.socialMedia.isOpened,
            },
          },
        }));
      } else if (
        this.state.currentAngle > 180 &&
        this.state.currentAngle <= 240
      ) {
        this.setState((prev) => ({
          menus: {
            coverFlow: {
              isHovered: false,
              isOpened: prev.menus.coverFlow.isOpened,
            },
            settings: {
              isHovered: false,
              isOpened: prev.menus.settings.isOpened,
            },
            games: {
              isHovered: false,
              isOpened: prev.menus.games.isOpened,
            },
            musics: {
              isHovered: true,
              isOpened: prev.menus.musics.isOpened,
            },
            notes: {
              isHovered: false,
              isOpened: prev.menus.notes.isOpened,
            },
            socialMedia: {
              isHovered: false,
              isOpened: prev.menus.socialMedia.isOpened,
            },
          },
        }));
      } else if (
        this.state.currentAngle > 240 &&
        this.state.currentAngle <= 300
      ) {
        this.setState((prev) => ({
          menus: {
            coverFlow: {
              isHovered: false,
              isOpened: prev.menus.coverFlow.isOpened,
            },
            settings: {
              isHovered: false,
              isOpened: prev.menus.settings.isOpened,
            },
            games: {
              isHovered: false,
              isOpened: prev.menus.games.isOpened,
            },
            musics: {
              isHovered: false,
              isOpened: prev.menus.musics.isOpened,
            },
            notes: {
              isHovered: true,
              isOpened: prev.menus.notes.isOpened,
            },
            socialMedia: {
              isHovered: false,
              isOpened: prev.menus.socialMedia.isOpened,
            },
          },
        }));
      } else if (
        this.state.currentAngle > 300 &&
        this.state.currentAngle < 360
      ) {
        this.setState((prev) => ({
          menus: {
            coverFlow: {
              isHovered: false,
              isOpened: prev.menus.coverFlow.isOpened,
            },
            settings: {
              isHovered: false,
              isOpened: prev.menus.settings.isOpened,
            },
            games: {
              isHovered: false,
              isOpened: prev.menus.games.isOpened,
            },
            musics: {
              isHovered: false,
              isOpened: prev.menus.musics.isOpened,
            },
            notes: {
              isHovered: false,
              isOpened: prev.menus.notes.isOpened,
            },
            socialMedia: {
              isHovered: true,
              isOpened: prev.menus.socialMedia.isOpened,
            },
          },
        }));
      }
    }
  }

  handleClick = () => {
    this.setState({ isClicked: true, openMenu: false });
    setTimeout(() => this.setState({ isClicked: false }), 1000);

    // Open Menu Based On Condition
    const { coverFlow, settings, games, musics, notes, socialMedia } =
      this.state.menus;
    if (coverFlow.isHovered) {
      this.setState({
        menus: {
          coverFlow: {
            isHovered: false,
            isOpened: true,
          },
          settings: {
            isHovered: false,
            isOpened: false,
          },
          games: {
            isHovered: false,
            isOpened: false,
          },
          musics: {
            isHovered: false,
            isOpened: false,
          },
          notes: {
            isHovered: false,
            isOpened: false,
          },
          socialMedia: {
            isHovered: false,
            isOpened: false,
          },
        },
      });
    } else if (settings.isHovered) {
      this.setState({
        menus: {
          coverFlow: {
            isHovered: false,
            isOpened: false,
          },
          settings: {
            isHovered: false,
            isOpened: true,
          },
          games: {
            isHovered: false,
            isOpened: false,
          },
          musics: {
            isHovered: false,
            isOpened: false,
          },
          notes: {
            isHovered: false,
            isOpened: false,
          },
          socialMedia: {
            isHovered: false,
            isOpened: false,
          },
        },
      });
    } else if (games.isHovered) {
      this.setState({
        menus: {
          coverFlow: {
            isHovered: false,
            isOpened: false,
          },
          settings: {
            isHovered: false,
            isOpened: false,
          },
          games: {
            isHovered: false,
            isOpened: true,
          },
          musics: {
            isHovered: false,
            isOpened: false,
          },
          notes: {
            isHovered: false,
            isOpened: false,
          },
          socialMedia: {
            isHovered: false,
            isOpened: false,
          },
        },
      });
    } else if (musics.isHovered) {
      this.setState({
        menus: {
          coverFlow: {
            isHovered: false,
            isOpened: false,
          },
          settings: {
            isHovered: false,
            isOpened: false,
          },
          games: {
            isHovered: false,
            isOpened: false,
          },
          musics: {
            isHovered: false,
            isOpened: true,
          },
          notes: {
            isHovered: false,
            isOpened: false,
          },
          socialMedia: {
            isHovered: false,
            isOpened: false,
          },
        },
      });
    } else if (notes.isHovered) {
      this.setState({
        menus: {
          coverFlow: {
            isHovered: false,
            isOpened: false,
          },
          settings: {
            isHovered: false,
            isOpened: false,
          },
          games: {
            isHovered: false,
            isOpened: false,
          },
          musics: {
            isHovered: false,
            isOpened: false,
          },
          notes: {
            isHovered: false,
            isOpened: true,
          },
          socialMedia: {
            isHovered: false,
            isOpened: false,
          },
        },
      });
    } else if (socialMedia.isHovered) {
      this.setState({
        menus: {
          coverFlow: {
            isHovered: false,
            isOpened: false,
          },
          settings: {
            isHovered: false,
            isOpened: false,
          },
          games: {
            isHovered: false,
            isOpened: false,
          },
          musics: {
            isHovered: false,
            isOpened: false,
          },
          notes: {
            isHovered: false,
            isOpened: false,
          },
          socialMedia: {
            isHovered: false,
            isOpened: true,
          },
        },
      });
    }
  };

  render() {
    const { isClicked, openMenu, menus } = this.state;
    const { coverFlow, settings, games, musics, notes, socialMedia } = menus;

    return (
      <div className="container">
        <div className="display_screen">
          <div className={`menu_items ${openMenu ? "visible" : ""}`}>
            <div className="items">
              <h1>iPod.js</h1>
              <p className={coverFlow.isHovered ? "hovered_item" : ""}>
                Cover Flow
              </p>
              <p className={settings.isHovered ? "hovered_item" : ""}>
                Settings
              </p>
              <p className={games.isHovered ? "hovered_item" : ""}>Games</p>
              <p className={musics.isHovered ? "hovered_item" : ""}>Musics</p>
              <p className={notes.isHovered ? "hovered_item" : ""}>Notes</p>
              <p className={socialMedia.isHovered ? "hovered_item" : ""}>
                Social Media
              </p>
            </div>
          </div>
          {/* Screens */}
          {/* Cover Flow */}
          <div className={`cover_flow ${coverFlow.isOpened ? "visible" : ""}`}>
            <div className="congratulations-message">
              <p>🎉🎊 Congratulations! 🎊🎉</p>
              <p>Welcome to the Cover Flow page!</p>
            </div>
          </div>

          {/* Settings */}
          <div className={`cover_flow ${settings.isOpened ? "visible" : ""}`}>
            <div className="congratulations-message">
              <img
                className="bg-color"
                src="/assets/images/settings.png"
                alt="settings"
              />
            </div>
          </div>

          {/* Games */}
          <div className={`cover_flow ${games.isOpened ? "visible" : ""}`}>
            <div className="games-content"></div>
          </div>

          {/* Musics */}
          <div className={`cover_flow ${musics.isOpened ? "visible" : ""}`}>
            <div className="congratulations-message">
              <img
                className="bg-color"
                src="/assets/images/music.png"
                alt="settings"
              />
            </div>
          </div>

          {/* Notes */}
          <div className={`cover_flow ${notes.isOpened ? "visible" : ""}`}>
            <div className="congratulations-message">
              <p>🎯 Notes! 🎯</p>
              <p>Its Time To Study!</p>
            </div>
          </div>

          {/* Notes */}
          <div
            className={`cover_flow ${socialMedia.isOpened ? "visible" : ""}`}
          >
            <div className="congratulations-message">
              <p>🎈 Social Media! 🎈</p>
              <p>Lets Enjoy Some Moments!</p>
            </div>
          </div>
        </div>
        <div className="controls">
          <div
            ref={(ref) => (this.menuRef = ref)}
            className="button_set"
            onMouseDown={this.handleMouseDown}
            onMouseMove={this.handleMouseMove}
          >
            <p className="menu_button" onClick={this.handelOpenMenu}>
              MENU
            </p>
            <button
              className={`ok_button ${isClicked ? "clicked" : ""}`}
              onClick={this.handleClick}
              onMouseDown={this.preventPropagation}
              onMouseMove={this.preventPropagation}
              onMouseUp={this.preventPropagation}
            ></button>
            <img
              className="previous_button"
              src="/assets/images/previous.png"
              alt=""
            />
            <img className="next_button" src="/assets/images/next.png" alt="" />
            <img
              className="forward_button"
              src="/assets/images/forward.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}
