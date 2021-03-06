/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type UiHelper = import('./jira_helper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: CodeceptJS.I }
  interface CallbackOrder { [0]: CodeceptJS.I }
  interface Methods extends CodeceptJS.Playwright, UiHelper, CodeceptJS.REST {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
