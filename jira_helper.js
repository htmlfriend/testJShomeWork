const { Helper } = codeceptjs;

class Jira extends Helper {
  // before/after hooks
  /**
   * @protected
   */
  _before() {
    // remove if not used
  }

  /**
   * @protected
   */
  _after() {
    // remove if not used
  }
  async addJireTicket() {
    const { REST } = this.helpers;
    const issue = {
      fields: {
        project: {
          id: "10004",
        },
        summary: "no rest",
        description: "create issues of using",
        issuetype: {
          id: "10000",
        },
      },
    };
    const headers = {
      Authorization: "Basic xxxxx",
      "Content-Type": "application/json",
    };
    const r = await REST.sendPostRequest(
      "https://testingsiteonjira.atlassian.net/jira/software/c/projects/LOV/issues/",
      issue,
      headers
    );
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']
}

module.exports = Jira;
