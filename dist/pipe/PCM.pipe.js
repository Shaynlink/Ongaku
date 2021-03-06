'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const prism = require("prism-media");
const FFMPEG_ARGUMENTS = [
    '-analyzeduration', '0',
    '-loglevel', '0',
    '-f', 's16le',
    '-ar', '48000',
    '-ac', '2',
];
/**
 * Class PCM pipe
 */
class PCM {
    /**
     * @param {stream.Readable} data - Stream readable
     * @param {PCMArgs} args - FFMPEG args
     */
    constructor(data, args = FFMPEG_ARGUMENTS) {
        /**
         * Stream
         * @type {stream.Readable}
         */
        this.data = data;
        /**
         * FFMPEG args
         * @type {PCMArgs}
         */
        this.args = args;
    }
    ;
    /**
     * Pipe stream
     * @param {PCMArgs} args - FFMPEG args
     * @return {stream.Readable}
     * @example
     * pipe();
     * @example
     * pipe([
     *  '-analyzeduration', '0',
     *  '-loglevel', '0',
     *  '-f', 's16le',
     *  '-ar', '48000',
     *  '-ac', '2',
     * ]);
     */
    pipe(args = this.args) {
        return this.data.pipe(new prism.FFmpeg({ args }));
    }
    ;
}
;
exports.default = PCM;
