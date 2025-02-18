from flask import Flask, url_for, redirect, render_template, request, jsonify

import json
app = Flask(__name__)

@app.route('/get_data')
def get_data_dic_spa_ing():
    with open('./data/dic_technical_spa_ing.json', 'r', encoding= 'utf-8') as file_dic_spa_ing:
        data_dic_spa_ing = json.load(file_dic_spa_ing)
        return jsonify(data_dic_spa_ing)

@app.route('/')
def index():
    return render_template('index.html')
@app.route('/search')
def search():
    search_term = request.args.get('query')
    return  f'Result: {search_term}'

if __name__ == '__main__':
     app.run(debug=True)
