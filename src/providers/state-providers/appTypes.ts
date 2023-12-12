export type State = {
  dropDown: string;
  headerOpen: string;
  activeLink: string;
  toggle: boolean;
};

export type Action =
  | {
      type: "SET_DROPDOWN";
      payload: string;
    }
  | {
      type: "SET_TOGGLE";
      payload: boolean;
    }
  | {
      type: "SET_HEADERDROPDOWN";
      payload: string;
    }
  | {
      type: "ACTIVE_LINK";
      payload: string;
    };
