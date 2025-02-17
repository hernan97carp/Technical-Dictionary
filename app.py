from flask import Flask, url_for, redirect, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')
@app.route('/search')
def search():
    search_term = request.args.get('query')
    return  f'Result: {search_term}'

if __name__ == '__main__':
     app.run(debug=True)
