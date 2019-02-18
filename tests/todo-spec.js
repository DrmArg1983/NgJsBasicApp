describe("NGCRUD App", function() {
  beforeEach(function() {
    browser.get("http://localhost:8080/#/");
  });

  it("should have a title", function() {
    var lnkStart = element(by.id("lnkStart"));
    var lnkCreatePost = element(by.id("lnkCreatePost"));

    expect(lnkStart.getText()).toEqual("Start");
    expect(lnkCreatePost.getText()).toEqual("Create Post");
  });

  it("should have basic navigation from index", function() {
    var lnkStart = element(by.id("lnkStart"));
    var lnkCreatePost = element(by.id("lnkCreatePost"));

    expect(lnkStart.getText()).toEqual("Start");
    expect(lnkCreatePost.getText()).toEqual("Create Post");
  });

  it("should have loaded tab control view", function() {
    var basicActions = "READ MORE EDIT DELETE";
    var textFromFirstItem =
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit";
    var history = element.all(by.repeater("post in posts"));

    expect(history.count()).toEqual(100);
    expect(history.first().getText()).toContain(textFromFirstItem);
    expect(history.first().getText()).toContain(basicActions);
  });

  it("should load a single post", function() {
    var history = element.all(by.repeater("post in posts"));
    var btnReadMore = history.first().all(by.css(".btn--blue"));
    btnReadMore.click();

    expect(browser.getCurrentUrl()).toEqual("http://localhost:8080/#/post/1");
  });
});
