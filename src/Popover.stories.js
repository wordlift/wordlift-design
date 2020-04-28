/**
 * External dependencies
 */
import React from "react";
import styled from "@emotion/styled";
import tinymce from "tinymce/tinymce";
import "tinymce/themes/modern/theme";
import { initializeEditor } from "@wordpress/edit-post";
import domReady from "@wordpress/dom-ready";
import { registerCoreBlocks } from "@wordpress/block-library";
import {
  BlockList,
  ObserveTyping,
  PostTitle,
  WritingFlow,
} from "@wordpress/editor";
import { withFilters } from "@wordpress/components";
import { addFilter } from "@wordpress/hooks";
/**
 * Internal dependencies
 */
import { createPopover, Popover, PopoverManager } from "./Popover";
import { Button } from "./Button";

registerCoreBlocks();

export default {
  title: "Design System|Popover",
  component: Popover,
};

export const allPopovers = () => (
  <div>
    <Popover direction={null}>No direction</Popover>
    <Popover direction={"top"}>Top</Popover>
    <Popover direction={"left"}>Left</Popover>
    <Popover direction={"right"}>Right</Popover>
    <Popover direction={"bottom"}>Bottom</Popover>
    <Popover direction={"left"}>
      <Button size={"small"}>Add</Button>
    </Popover>
  </div>
);

export const createPopoverStory = () => {
  createPopover(<Popover>Hello World!</Popover>, {
    top: 200,
    right: 200,
    bottom: 200,
    left: 200,
  });
  return <div>This component requires interaction.</div>;
};

createPopoverStory.story = {
  name: "Create Popover",
};

export const selectionPopover = () => <></>;

selectionPopover.story = {
  decorators: [
    (storyFn) => (
      <>
        <div
          contentEditable={true}
          style={{
            width: "calc( 100% - 8.8rem )",
            height: "100%",
            fontFamily: "serif",
            fontSize: "1.2rem",
            lineHeight: "1.6rem",
            padding: "0 .4rem",
            boxSizing: "border",
            border: "1px solid lightgray",
            outline: "none",
            margin: "0 4rem",
          }}
          onSelect={() => {
            const selection = document.getSelection();
            if (0 === selection.rangeCount) return;

            const range = selection.getRangeAt(0);
            if (range.collapsed) return;

            const { top, right, bottom, left } = range.getBoundingClientRect();
            createPopover(
              <Button onClick={() => alert("Ouch!")}>Hello Mars!</Button>,
              {
                top,
                right,
                bottom,
                left,
              }
            );
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            assumenda at consequatur consequuntur eos et eum excepturi expedita
            fuga ipsam ipsum iste minima modi mollitia omnis recusandae
            similique voluptates, voluptatum?
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur, ipsam, voluptatum. Accusamus aperiam doloremque facere
            fuga quae? Eligendi facilis laudantium nesciunt odio placeat quidem,
            quo saepe sed voluptatem voluptates? Numquam?
          </p>
        </div>
        {storyFn()}
      </>
    ),
  ],
};

const StyledDraggable = styled.div`
  ${(props) => `
    transform: translate3d( ${props.x}px, ${props.y}px, 0 );
  `}
  border: 2px solid gray;
  width: 120px;
  height: 40px;
  cursor: grab;
  font-size: 0.5rem;
  font-family: sans-serif;
`;

class Draggable extends React.Component {
  constructor(props) {
    super(props);

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);

    this._handleMouseMove = () => {};

    this.state = { top: 0, right: 0, bottom: 0, left: 0 };

    this.setRef = (el) => (this.el = el);
  }

  handleMouseDown(e) {
    const { x, y } = this.el.getBoundingClientRect();
    this.offsetX = e.clientX - x;
    this.offsetY = e.clientY - y;

    this._handleMouseMove = (e) => {
      e.preventDefault();

      const { top, right, bottom, left } = this.el.getBoundingClientRect();

      const coords = {
        x: e.clientX - this.offsetX,
        y: e.clientY - this.offsetY,
      };

      this.setState((state) => ({
        ...state,
        ...coords,
        ...{ top, right, bottom, left },
      }));
    };
  }

  handleMouseMove(e) {
    this._handleMouseMove(e);
  }

  handleMouseUp() {
    this._handleMouseMove = () => {};
  }

  componentDidMount() {
    const { top, right, bottom, left } = this.el.getBoundingClientRect();

    this.setState((state) => ({ ...state, ...{ top, right, bottom, left } }));
  }

  render() {
    const { children, ...props } = { ...this.props, ...this.state };

    return (
      <div
        style={{
          height: "400px",
          border: "1px solid lightgray",
          overflow: "hidden",
        }}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseUp}
      >
        <StyledDraggable
          {...props}
          onMouseDown={this.handleMouseDown}
          ref={this.setRef}
        >
          {`x: ${props.x}, y: ${props.y}`}
          <br />
          {`top: ${props.top}, right: ${props.right}, bottom: ${props.bottom}, left: ${props.left}`}
        </StyledDraggable>
        <PopoverManager
          top={props.top}
          right={props.right}
          bottom={props.bottom}
          left={props.left}
          positions={["bottom", "right", "top", "left"]}
        >
          <Button>Click Me</Button>
        </PopoverManager>
      </div>
    );
  }
}

export const draggable = () => (
  <div>
    <Draggable />
  </div>
);

class TinyMCE extends React.Component {
  constructor(props) {
    super(props);

    this.id = "tinymce-" + Math.floor(Math.random() * 1000);

    this.setRef = (el) => (this.el = el);
  }

  componentDidMount() {
    tinymce.init({
      selector: `#${this.id}`,
      plugins: "@wordlift/design/tinymce",
    });
  }

  render() {
    return (
      <textarea
        id={this.id}
        ref={this.setRef}
        defaultValue={`
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa id neque aliquam vestibulum morbi blandit cursus risus at. Euismod elementum nisi quis eleifend quam. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Et tortor consequat id porta nibh. Volutpat diam ut venenatis tellus in metus. Aliquam etiam erat velit scelerisque in dictum non. Sodales ut etiam sit amet nisl purus in mollis. Ut pharetra sit amet aliquam id. Neque egestas congue quisque egestas. Sed euismod nisi porta lorem mollis aliquam. Ornare suspendisse sed nisi lacus sed viverra tellus. Id nibh tortor id aliquet lectus proin nibh. Vitae justo eget magna fermentum iaculis. Dignissim enim sit amet venenatis. Dignissim enim sit amet venenatis urna cursus. Enim tortor at auctor urna. At auctor urna nunc id cursus metus aliquam eleifend mi.

Sit amet luctus venenatis lectus magna. Sed elementum tempus egestas sed sed. Sed vulputate mi sit amet mauris commodo quis imperdiet massa. Maecenas accumsan lacus vel facilisis volutpat. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Volutpat lacus laoreet non curabitur. Ultricies tristique nulla aliquet enim tortor at auctor urna. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Orci a scelerisque purus semper eget duis. Velit laoreet id donec ultrices tincidunt arcu non sodales. Porttitor rhoncus dolor purus non enim. Ut porttitor leo a diam sollicitudin. Ac ut consequat semper viverra nam libero justo. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Ipsum faucibus vitae aliquet nec ullamcorper. Ac ut consequat semper viverra nam libero justo laoreet sit. Odio ut enim blandit volutpat. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper.

Augue ut lectus arcu bibendum at varius vel pharetra. Tempus imperdiet nulla malesuada pellentesque. Mauris cursus mattis molestie a iaculis at erat pellentesque. Diam in arcu cursus euismod. Placerat vestibulum lectus mauris ultrices eros in. Morbi leo urna molestie at elementum eu. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Sed risus ultricies tristique nulla. Tellus orci ac auctor augue mauris augue neque gravida. Lacus laoreet non curabitur gravida arcu ac tortor dignissim.

Egestas maecenas pharetra convallis posuere. Ultrices gravida dictum fusce ut placerat. At volutpat diam ut venenatis tellus in metus vulputate eu. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Leo vel orci porta non pulvinar. Varius vel pharetra vel turpis nunc. Euismod quis viverra nibh cras pulvinar. Posuere morbi leo urna molestie at elementum eu. Molestie nunc non blandit massa enim nec. Feugiat in ante metus dictum at tempor commodo ullamcorper. Volutpat sed cras ornare arcu dui. Sit amet purus gravida quis blandit turpis cursus in hac. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.

Sed pulvinar proin gravida hendrerit lectus a. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Vitae proin sagittis nisl rhoncus mattis rhoncus. Nec feugiat in fermentum posuere urna. Ultricies mi quis hendrerit dolor magna eget est. Ullamcorper a lacus vestibulum sed arcu non. Nec nam aliquam sem et tortor consequat id. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Enim eu turpis egestas pretium aenean pharetra magna. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Est sit amet facilisis magna etiam. Sit amet justo donec enim diam vulputate ut pharetra. Lectus vestibulum mattis ullamcorper velit sed. Nunc mattis enim ut tellus elementum sagittis vitae. Eget duis at tellus at urna. Nunc congue nisi vitae suscipit tellus mauris. Sed risus ultricies tristique nulla. Egestas maecenas pharetra convallis posuere morbi. Praesent elementum facilisis leo vel fringilla est.

Turpis cursus in hac habitasse platea dictumst quisque sagittis. Purus sit amet luctus venenatis. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Orci phasellus egestas tellus rutrum tellus pellentesque. Orci nulla pellentesque dignissim enim sit. Et magnis dis parturient montes nascetur ridiculus mus mauris. Dignissim convallis aenean et tortor at risus viverra. Enim eu turpis egestas pretium aenean pharetra magna ac. Velit euismod in pellentesque massa. Consectetur lorem donec massa sapien faucibus et molestie. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Eget velit aliquet sagittis id consectetur purus. Senectus et netus et malesuada fames ac turpis. Purus ut faucibus pulvinar elementum integer. Enim blandit volutpat maecenas volutpat blandit. Nec ullamcorper sit amet risus nullam eget felis eget nunc. Tellus elementum sagittis vitae et leo duis ut diam quam.

Tristique et egestas quis ipsum suspendisse. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Et magnis dis parturient montes nascetur ridiculus mus mauris vitae. Praesent elementum facilisis leo vel. Tempus quam pellentesque nec nam aliquam. Tempor commodo ullamcorper a lacus vestibulum. Turpis in eu mi bibendum neque egestas congue quisque egestas. Integer malesuada nunc vel risus commodo.

Mauris sit amet massa vitae tortor condimentum lacinia. Ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipiscing elit duis. Nunc sed id semper risus in hendrerit. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi. Consectetur lorem donec massa sapien faucibus et molestie ac feugiat. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Enim ut tellus elementum sagittis vitae et leo. Aliquam ultrices sagittis orci a. Nulla at volutpat diam ut venenatis tellus in. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Elementum integer enim neque volutpat ac tincidunt. Orci eu lobortis elementum nibh tellus. Aliquet bibendum enim facilisis gravida neque convallis a cras. Bibendum ut tristique et egestas. Tempor orci dapibus ultrices in iaculis nunc sed augue. Blandit libero volutpat sed cras ornare arcu dui vivamus.

Nec sagittis aliquam malesuada bibendum arcu vitae. Mauris rhoncus aenean vel elit. Risus feugiat in ante metus dictum at tempor. Nullam vehicula ipsum a arcu cursus vitae congue. Pulvinar pellentesque habitant morbi tristique senectus. Sed faucibus turpis in eu. Dolor sit amet consectetur adipiscing. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. Massa massa ultricies mi quis hendrerit dolor magna eget. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Volutpat maecenas volutpat blandit aliquam etiam erat. Dictumst quisque sagittis purus sit amet volutpat consequat.

Purus in massa tempor nec feugiat. Mauris vitae ultricies leo integer. Amet luctus venenatis lectus magna fringilla urna. Fusce id velit ut tortor. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Mattis enim ut tellus elementum sagittis vitae et leo duis. Justo laoreet sit amet cursus sit amet dictum. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Quis hendrerit dolor magna eget est. Magna ac placerat vestibulum lectus mauris ultrices eros. In mollis nunc sed id semper. Imperdiet proin fermentum leo vel orci porta non. Fames ac turpis egestas sed tempus urna et pharetra.

Eu facilisis sed odio morbi quis commodo odio. Interdum velit euismod in pellentesque massa placerat duis ultricies. Integer enim neque volutpat ac tincidunt. Eget nullam non nisi est sit amet. Felis donec et odio pellentesque. Augue ut lectus arcu bibendum at varius vel pharetra vel. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Dignissim sodales ut eu sem integer vitae justo eget. Senectus et netus et malesuada fames ac. Felis eget nunc lobortis mattis. Nisl rhoncus mattis rhoncus urna neque. Vitae sapien pellentesque habitant morbi. Dui accumsan sit amet nulla facilisi morbi tempus iaculis.

Faucibus turpis in eu mi bibendum. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Eu feugiat pretium nibh ipsum consequat nisl. Sit amet mauris commodo quis imperdiet. Blandit turpis cursus in hac habitasse platea. Feugiat nibh sed pulvinar proin gravida hendrerit. Tellus in metus vulputate eu scelerisque felis imperdiet. Congue quisque egestas diam in arcu cursus euismod quis viverra. Pulvinar neque laoreet suspendisse interdum consectetur libero id. Eget magna fermentum iaculis eu non diam. Netus et malesuada fames ac turpis egestas maecenas pharetra convallis. Viverra suspendisse potenti nullam ac tortor vitae purus. Nulla facilisi etiam dignissim diam quis enim lobortis. Sit amet cursus sit amet dictum sit. Sit amet massa vitae tortor. Cursus turpis massa tincidunt dui ut ornare lectus sit. Iaculis urna id volutpat lacus laoreet non curabitur. Ut etiam sit amet nisl. Id donec ultrices tincidunt arcu non sodales. Nullam non nisi est sit amet facilisis.

Ut eu sem integer vitae justo eget magna fermentum iaculis. Venenatis tellus in metus vulputate eu scelerisque. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus. Volutpat lacus laoreet non curabitur. Mi sit amet mauris commodo quis imperdiet massa. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Et molestie ac feugiat sed. Sed velit dignissim sodales ut eu sem integer. Adipiscing tristique risus nec feugiat in fermentum posuere. Scelerisque purus semper eget duis. Non odio euismod lacinia at quis risus sed vulputate odio. Vestibulum morbi blandit cursus risus. Purus gravida quis blandit turpis cursus in hac habitasse platea. Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies. Diam vel quam elementum pulvinar.

Cras semper auctor neque vitae tempus quam pellentesque nec. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Varius quam quisque id diam vel quam elementum. Odio pellentesque diam volutpat commodo sed egestas egestas. Tellus orci ac auctor augue. Porttitor eget dolor morbi non arcu. Mauris ultrices eros in cursus turpis. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Eu mi bibendum neque egestas congue quisque egestas diam. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Est lorem ipsum dolor sit. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Facilisis volutpat est velit egestas dui. Nunc aliquet bibendum enim facilisis gravida neque convallis. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Euismod in pellentesque massa placerat duis ultricies. Amet justo donec enim diam vulputate ut.

Et malesuada fames ac turpis egestas sed tempus. Urna condimentum mattis pellentesque id nibh tortor id. Eget mauris pharetra et ultrices neque ornare. Ornare lectus sit amet est placerat in. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Sed arcu non odio euismod lacinia at quis risus. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Quam vulputate dignissim suspendisse in est ante in. Porttitor lacus luctus accumsan tortor posuere ac ut. Egestas sed tempus urna et pharetra pharetra massa massa. Condimentum lacinia quis vel eros donec ac.

Justo laoreet sit amet cursus sit amet dictum sit. Tortor at risus viverra adipiscing at in tellus. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Egestas diam in arcu cursus euismod quis viverra nibh cras. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Ultrices sagittis orci a scelerisque purus semper eget duis. Egestas congue quisque egestas diam in arcu. Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi. Volutpat est velit egestas dui id. Quis risus sed vulputate odio ut enim blandit. Malesuada proin libero nunc consequat interdum varius sit.

Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam. Proin libero nunc consequat interdum varius sit amet. At tellus at urna condimentum. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Sed faucibus turpis in eu mi bibendum. Aliquam id diam maecenas ultricies mi eget mauris. Turpis egestas pretium aenean pharetra magna ac. At auctor urna nunc id cursus metus aliquam. Pretium lectus quam id leo. Integer vitae justo eget magna fermentum iaculis eu non. Pretium nibh ipsum consequat nisl vel pretium lectus. Suscipit adipiscing bibendum est ultricies. Suspendisse potenti nullam ac tortor vitae purus. Ultricies mi eget mauris pharetra et ultrices. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id.

Vulputate ut pharetra sit amet. Rhoncus aenean vel elit scelerisque. Aenean vel elit scelerisque mauris pellentesque. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Fames ac turpis egestas maecenas pharetra convallis posuere. Risus ultricies tristique nulla aliquet enim. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Morbi tristique senectus et netus et. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Urna et pharetra pharetra massa massa ultricies mi. Ut pharetra sit amet aliquam id diam maecenas ultricies. Tristique et egestas quis ipsum suspendisse ultrices gravida. Arcu cursus euismod quis viverra nibh. Porta nibh venenatis cras sed. Semper viverra nam libero justo. Pellentesque eu tincidunt tortor aliquam nulla.

Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Consequat interdum varius sit amet mattis. Malesuada bibendum arcu vitae elementum curabitur vitae. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Vestibulum sed arcu non odio euismod. Sit amet facilisis magna etiam tempor orci. Lectus mauris ultrices eros in cursus turpis massa. Sit amet nulla facilisi morbi tempus. Tellus at urna condimentum mattis pellentesque id. Tristique senectus et netus et malesuada fames. Urna molestie at elementum eu facilisis sed odio morbi. Dapibus ultrices in iaculis nunc sed augue lacus. Lacus viverra vitae congue eu. Euismod lacinia at quis risus. Hac habitasse platea dictumst quisque sagittis.

Sed turpis tincidunt id aliquet risus feugiat. Enim facilisis gravida neque convallis a cras semper auctor neque. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Pharetra massa massa ultricies mi quis. In nibh mauris cursus mattis molestie. Etiam erat velit scelerisque in dictum non consectetur a. Sed viverra tellus in hac habitasse. Augue lacus viverra vitae congue eu consequat ac felis. Condimentum lacinia quis vel eros donec ac odio. Neque vitae tempus quam pellentesque nec nam aliquam sem. Id aliquet lectus proin nibh nisl condimentum. Massa sed elementum tempus egestas sed sed. Tristique senectus et netus et malesuada fames ac turpis egestas. Dolor sit amet consectetur adipiscing elit duis tristique. In fermentum posuere urna nec. Cursus risus at ultrices mi tempus. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Nibh mauris cursus mattis molestie a.
        `}
      ></textarea>
    );
  }
}

function withEditorEvents(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.handleMessage = this.handleMessage.bind(this);
      this.handleSelectionChange = this.handleSelectionChange.bind(this);
      this.handleScroll = this.handleScroll.bind(this);
    }

    handleMessage(e) {
      if (window.origin !== e.origin || undefined === e.data.type) return;

      switch (e.data.type) {
        case "wordlift/design/editor/selectionChange":
          this.handleSelectionChange(e);
          break;
        case "wordlift/design/editor/scroll":
        case "wordlift/design/editor/resize":
          this.hasSelection() && this.handleScroll(e);
          break;
        default:
        // Ignore
      }
    }

    handleSelectionChange(e) {
      const { selection } = e.data.payload;

      this.setState((state) => ({ ...selection }));
    }

    handleScroll(e) {
      // The element has scrolled, the rect isn't valid anymore. Remove it.
      this.setState((state) => ({ rect: undefined }));
    }

    hasSelection() {
      return (
        // There's state.
        this.state &&
        // There's a text selection (not empty).
        this.state.text &&
        // There's a rect geometry.
        this.state.rect &&
        this.state.rect.top &&
        this.state.rect.right &&
        this.state.rect.bottom &&
        this.state.rect.left
      );
    }

    componentDidMount() {
      window.addEventListener("message", this.handleMessage);
    }

    componentWillUnmount() {
      window.removeEventListener("message", this.handleMessage);
    }

    render() {
      const { children, ...props } = { ...this.props, ...this.state };

      return (
        (this.hasSelection() && (
          <WrappedComponent {...props.rect}>{children}</WrappedComponent>
        )) || <></>
      );
    }
  };
}

const PopoverWithEditorEvents = withEditorEvents(PopoverManager);

export const tinymceEditor = () => (
  <>
    <TinyMCE></TinyMCE>
    <PopoverWithEditorEvents>
      <Button>Click Me</Button>
    </PopoverWithEditorEvents>
  </>
);

addFilter(
  "experimentalRichText",
  "wordlift/design/selection-change",
  (FilteredComponent) =>
    class extends React.Component {
      constructor(props) {
        super(props);

        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleSelectionChange = this.handleSelectionChange.bind(this);
      }

      handleBlur() {
        document.removeEventListener(
          "selectionchange",
          this.handleSelectionChange
        );
      }

      handleFocus() {
        document.addEventListener(
          "selectionchange",
          this.handleSelectionChange
        );
      }

      handleSelectionChange() {
        const selection = document.getSelection().getRangeAt(0);
        const contents = selection.cloneContents();
        const container = document.createElement("p");
        container.appendChild(contents);

        const text = selection.toString();
        const html = container.innerHTML;
        const clientRect = selection.getBoundingClientRect();
        const rect =
          "" !== text // Explicitly destructuring is required with clientRect.
            ? {
                top: clientRect.top,
                right: clientRect.right,
                bottom: clientRect.bottom,
                left: clientRect.left,
              }
            : null;

        const payload = {
          selection: { text, html, rect },
          editor: { id: "gutenberg" },
          source: "gutenberg",
        };

        window.postMessage(
          { type: "wordlift/design/editor/selectionChange", payload },
          window.origin
        );

        console.log({ payload });
      }

      render() {
        return (
          <div onBlur={this.handleBlur} onFocus={this.handleFocus}>
            <FilteredComponent {...this.props} />
          </div>
        );
      }
    }
);

export const gutenbergEditor = () => (
  <div className={"edit-post-visual-editor"}>
    <WritingFlow>
      <ObserveTyping>
        <PostTitle />
        <BlockList />
      </ObserveTyping>
    </WritingFlow>
    <PopoverWithEditorEvents>
      <Button>Click Me</Button>
    </PopoverWithEditorEvents>
  </div>
);
