/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const octaves: any[] = Array.from({ length: 9 }).map(_ => ({}));

octaves[0]['A'] = 27.5;
octaves[0]['A#'] = 29.135235094880619;
octaves[0]['B'] = 30.867706328507756;

octaves[1]['C'] = 32.703195662574829;
octaves[1]['C#'] = 34.647828872109012;
octaves[1]['D'] = 36.708095989675945;
octaves[1]['D#'] = 38.890872965260113;
octaves[1]['E'] = 41.203444614108741;
octaves[1]['F'] = 43.653528929125485;
octaves[1]['F#'] = 46.249302838954299;
octaves[1]['G'] = 48.999429497718661;
octaves[1]['G#'] = 51.913087197493142;
octaves[1]['A'] = 55.0;
octaves[1]['A#'] = 58.270470189761239;
octaves[1]['B'] = 61.735412657015513;

octaves[2]['C'] = 65.406391325149658;
octaves[2]['C#'] = 69.295657744218024;
octaves[2]['D'] = 73.41619197935189;
octaves[2]['D#'] = 77.781745930520227;
octaves[2]['E'] = 82.406889228217482;
octaves[2]['F'] = 87.307057858250971;
octaves[2]['F#'] = 92.498605677908599;
octaves[2]['G'] = 97.998858995437323;
octaves[2]['G#'] = 103.826174394986284;
octaves[2]['A'] = 110.0;
octaves[2]['A#'] = 116.540940379522479;
octaves[2]['B'] = 123.470825314031027;

octaves[3]['C'] = 130.812782650299317;
octaves[3]['C#'] = 138.591315488436048;
octaves[3]['D'] = 146.83238395870378;
octaves[3]['D#'] = 155.563491861040455;
octaves[3]['E'] = 164.813778456434964;
octaves[3]['F'] = 174.614115716501942;
octaves[3]['F#'] = 184.997211355817199;
octaves[3]['G'] = 195.997717990874647;
octaves[3]['G#'] = 207.652348789972569;
octaves[3]['A'] = 220.0;
octaves[3]['A#'] = 233.081880759044958;
octaves[3]['B'] = 246.941650628062055;

octaves[4]['C'] = 261.625565300598634;
octaves[4]['C#'] = 277.182630976872096;
octaves[4]['D'] = 293.66476791740756;
octaves[4]['D#'] = 311.12698372208091;
octaves[4]['E'] = 329.627556912869929;
octaves[4]['F'] = 349.228231433003884;
octaves[4]['F#'] = 369.994422711634398;
octaves[4]['G'] = 391.995435981749294;
octaves[4]['G#'] = 415.304697579945138;
octaves[4]['A'] = 440.0;
octaves[4]['A#'] = 466.163761518089916;
octaves[4]['B'] = 493.883301256124111;

octaves[5]['C'] = 523.251130601197269;
octaves[5]['C#'] = 554.365261953744192;
octaves[5]['D'] = 587.32953583481512;
octaves[5]['D#'] = 622.253967444161821;
octaves[5]['E'] = 659.255113825739859;
octaves[5]['F'] = 698.456462866007768;
octaves[5]['F#'] = 739.988845423268797;
octaves[5]['G'] = 783.990871963498588;
octaves[5]['G#'] = 830.609395159890277;
octaves[5]['A'] = 880.0;
octaves[5]['A#'] = 932.327523036179832;
octaves[5]['B'] = 987.766602512248223;

octaves[6]['C'] = 1046.502261202394538;
octaves[6]['C#'] = 1108.730523907488384;
octaves[6]['D'] = 1174.659071669630241;
octaves[6]['D#'] = 1244.507934888323642;
octaves[6]['E'] = 1318.510227651479718;
octaves[6]['F'] = 1396.912925732015537;
octaves[6]['F#'] = 1479.977690846537595;
octaves[6]['G'] = 1567.981743926997176;
octaves[6]['G#'] = 1661.218790319780554;
octaves[6]['A'] = 1760.0;
octaves[6]['A#'] = 1864.655046072359665;
octaves[6]['B'] = 1975.533205024496447;

octaves[7]['C'] = 2093.004522404789077;
octaves[7]['C#'] = 2217.461047814976769;
octaves[7]['D'] = 2349.318143339260482;
octaves[7]['D#'] = 2489.015869776647285;
octaves[7]['E'] = 2637.020455302959437;
octaves[7]['F'] = 2793.825851464031075;
octaves[7]['F#'] = 2959.955381693075191;
octaves[7]['G'] = 3135.963487853994352;
octaves[7]['G#'] = 3322.437580639561108;
octaves[7]['A'] = 3520.0;
octaves[7]['A#'] = 3729.310092144719331;
octaves[7]['B'] = 3951.066410048992894;

octaves[8]['C'] = 4186.009044809578154;

export { octaves };