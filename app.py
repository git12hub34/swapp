from flask import Flask, render_template
app = Flask(__name__)


@app.route("/")
def home():
    return render_template("home.html")
  
@app.route("/events")
def events():
    return render_template("events.html")

@app.route("/how")
def how():
    return render_template("how.html")

@app.route("/app")
def app_page():
    return render_template("app.html")
  
@app.route("/business")
def business():
    return render_template("business.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/community")
def community():
    return render_template("community.html")

@app.route("/privacy")
def privacy():
    return render_template("privacy.html")

@app.route("/terms")
def terms():
    return render_template("terms.html")



if __name__ == "__main__":
    app.run(debug=True)
