// class FormControl<TValue = any> extends AbstractControl<TValue> {
//     new(): FormControl<any>
//     defaultValue: TValue
//     setValue(value: TValue, options?: { onlySelf?: boolean; emitEvent?: boolean; emitModelToViewChange?: boolean; emitViewToModelChange?: boolean; }): void
//     patchValue(value: TValue, options?: { onlySelf?: boolean; emitEvent?: boolean; emitModelToViewChange?: boolean; emitViewToModelChange?: boolean; }): void
//     reset(formState?: TValue | FormControlState<TValue>, options?: { onlySelf?: boolean; emitEvent?: boolean; }): void
//     getRawValue(): TValue
//     registerOnChange(fn: Function): void
//     registerOnDisabledChange(fn: (isDisabled: boolean) => void): void

//     // inherited from forms/AbstractControl
//     constructor(validators: ValidatorFn | ValidatorFn[], asyncValidators: AsyncValidatorFn | AsyncValidatorFn[])
//     value: TValue
//     validator: ValidatorFn | null
//     asyncValidator: AsyncValidatorFn | null
//     parent: FormGroup | FormArray | null
//     status: FormControlStatus
//     valid: boolean
//     invalid: boolean
//     pending: boolean
//     disabled: boolean
//     enabled: boolean
//     errors: ValidationErrors | null
//     pristine: boolean
//     dirty: boolean
//     touched: boolean
//     untouched: boolean
//     valueChanges: Observable<TValue>
//     statusChanges: Observable<FormControlStatus>
//     updateOn: FormHooks
//     root: AbstractControl
//     setValidators(validators: ValidatorFn | ValidatorFn[]): void
//     setAsyncValidators(validators: AsyncValidatorFn | AsyncValidatorFn[]): void
//     addValidators(validators: ValidatorFn | ValidatorFn[]): void
//     addAsyncValidators(validators: AsyncValidatorFn | AsyncValidatorFn[]): void
//     removeValidators(validators: ValidatorFn | ValidatorFn[]): void
//     removeAsyncValidators(validators: AsyncValidatorFn | AsyncValidatorFn[]): void
//     hasValidator(validator: ValidatorFn): boolean
//     hasAsyncValidator(validator: AsyncValidatorFn): boolean
//     clearValidators(): void
//     clearAsyncValidators(): void
//     markAsTouched(opts: { onlySelf?: boolean; } = {}): void
//     markAllAsTouched(): void
//     markAsUntouched(opts: { onlySelf?: boolean; } = {}): void
//     markAsDirty(opts: { onlySelf?: boolean; } = {}): void
//     markAsPristine(opts: { onlySelf?: boolean; } = {}): void
//     markAsPending(opts: { onlySelf?: boolean; emitEvent?: boolean; } = {}): void
//     disable(opts: { onlySelf?: boolean; emitEvent?: boolean; } = {}): void
//     enable(opts: { onlySelf?: boolean; emitEvent?: boolean; } = {}): void
//     setParent(parent: FormGroup<any> | FormArray<any>): void
//     abstract setValue(value: TRawValue, options?: Object): void
//     abstract patchValue(value: TValue, options?: Object): void
//     abstract reset(value?: TValue, options?: Object): void
//     getRawValue(): any
//     updateValueAndValidity(opts: { onlySelf?: boolean; emitEvent?: boolean; } = {}): void
//     setErrors(errors: ValidationErrors, opts: { emitEvent?: boolean; } = {}): void
//     get<P extends string | ((string | number)[])>(path: P): AbstractControl<ɵGetProperty<TRawValue, P>> | null
//     getError(errorCode: string, path?: string | (string | number)[]): any
//     hasError(errorCode: string, path?: string | (string | number)[]): boolean
// }