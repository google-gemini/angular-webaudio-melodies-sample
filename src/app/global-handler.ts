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

import { ErrorHandler, Injectable } from '@angular/core';

enum Level {
  debug = 'debug',
  info = 'info',
  warn = 'warn',
  error = 'error',
}

interface DivMessage {
  level: Level;
  datetime: Date;
  message?: string;
  error?: Error;
}

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  logMessages: DivMessage[] = [];

  constructor() {}

  debug(msg: string) {
    this.logMessages.push({
      level: Level.debug,
      datetime: new Date(),
      message: msg,
      error: undefined,
    });
  }

  info(msg: string) {
    this.logMessages.push({
      level: Level.info,
      datetime: new Date(),
      message: msg,
      error: undefined,
    });
  }

  warn(msg: string) {
    this.logMessages.push({
      level: Level.warn,
      datetime: new Date(),
      message: msg,
      error: undefined,
    });
  }

  error(err?: Error, msg?: string) {
    this.logMessages.push({
      level: Level.error,
      datetime: new Date(),
      message: msg,
      error: err,
    });
    if (msg) {
      console.log(msg);
    }
    if (err) {
      console.log(err.stack);
    }
  }
}

@Injectable()
export class GlobalHandler implements ErrorHandler {
  constructor(private errorService: ErrorService) {}
  handleError(err: Error) {
    this.errorService.error(err, 'UNCAUGHT EXCEPTION');
  }
}
