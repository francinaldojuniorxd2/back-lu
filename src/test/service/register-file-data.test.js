"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const register_file_data_1 = require("../../service/register-file-data");
const pdf_extract_mock_1 = require("../mocks/pdf-extract.mock");
jest.mock('../../db/models/invoice.model', () => {
    return jest.fn().mockImplementation(() => ({
        save: () => __awaiter(void 0, void 0, void 0, function* () {
            return {
                dataValues: {
                    id: '1',
                },
            };
        }),
    }));
});
jest.mock('../../db/models/invoice-values.model', () => {
    return jest.fn().mockImplementation(() => ({
        save: () => __awaiter(void 0, void 0, void 0, function* () {
            return {
                dataValues: {
                    id: '1',
                },
            };
        }),
    }));
});
jest.mock('../../db/models/file.model', () => {
    return jest.fn().mockImplementation(() => ({
        save: () => __awaiter(void 0, void 0, void 0, function* () {
            return {
                dataValues: {
                    id: '1',
                },
            };
        }),
    }));
});
describe('register-file-data', () => {
    it('should return values!', () => __awaiter(void 0, void 0, void 0, function* () {
        const pathFile = path_1.default.resolve(__dirname, './files/01.pdf');
        const registerFileData = new register_file_data_1.RegisterFileData(pathFile, '01.pdf');
        const result = yield registerFileData.register(pdf_extract_mock_1.expectValueMock);
        console.log(result);
    }));
});
