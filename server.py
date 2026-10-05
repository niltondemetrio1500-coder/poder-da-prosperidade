from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).parent
VIDEO = Path('/home/ubuntu/vsl.mp4')
POSTER = Path('/home/ubuntu/vsl-poster.jpg')

class Handler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        if path == '/manus-storage/vsl_27c88ec0.mp4':
            return str(VIDEO)
        if path == '/manus-storage/vsl-poster_03b961a8.jpg':
            return str(POSTER)
        return super().translate_path(path)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache')
        super().end_headers()

if __name__ == '__main__':
    ThreadingHTTPServer(('0.0.0.0', 3000), Handler).serve_forever()
