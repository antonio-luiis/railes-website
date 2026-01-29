"use client";

import { useState } from "react";
import { Calculator, TrendingUp, DollarSign, Clock, Zap } from "lucide-react";

export default function ROICalculatorPage() {
    // Form state
    const [productionLines, setProductionLines] = useState(2);
    const [machines, setMachines] = useState(10);
    const [workingHours, setWorkingHours] = useState(16);
    const [productionPerWeek, setProductionPerWeek] = useState(5000);
    const [costPerHour, setCostPerHour] = useState(150);
    const [currentOEE, setCurrentOEE] = useState(65);
    const [targetOEE, setTargetOEE] = useState(85);
    const [downtime, setDowntime] = useState(15);

    // Calculate ROI with validated inputs
    const calculateROI = () => {
        // Input validation
        const validProductionLines = Math.max(1, productionLines || 1);
        const validMachines = Math.max(1, machines || 1);
        const validWorkingHours = Math.max(1, Math.min(24, workingHours || 8));
        const validCostPerHour = Math.max(1, costPerHour || 1);
        const validCurrentOEE = Math.max(1, Math.min(100, currentOEE || 50));
        const validTargetOEE = Math.max(validCurrentOEE, Math.min(100, targetOEE || validCurrentOEE));
        const validDowntime = Math.max(0, Math.min(100, downtime || 0));

        const workingDaysPerYear = 250;
        const hoursPerYear = validWorkingHours * workingDaysPerYear;

        // Total annual operating cost
        const annualOperatingCost = hoursPerYear * validCostPerHour * validProductionLines;

        // OEE Improvement Impact
        const oeeImprovementPercent = validTargetOEE - validCurrentOEE;
        const productionEfficiencyGain = (annualOperatingCost * oeeImprovementPercent) / 100;

        // Downtime Reduction Impact (50% reduction with monitoring)
        const currentDowntimeCost = (annualOperatingCost * validDowntime) / 100;
        const downtimeReductionSavings = currentDowntimeCost * 0.5;

        // Total annual savings
        const totalSavings = productionEfficiencyGain + downtimeReductionSavings;

        // Implementation cost
        const softwareCost = 15000;
        const perMachineCost = validMachines * 1500;
        const perLineCost = validProductionLines * 3000;
        const implementationCost = softwareCost + perMachineCost + perLineCost;

        // ROI calculation with safety checks
        const netBenefit = totalSavings - implementationCost;
        const roi = implementationCost > 0 ? (netBenefit / implementationCost) * 100 : 0;
        const monthlySavings = totalSavings / 12;
        const paybackMonths = monthlySavings > 0 ? implementationCost / monthlySavings : 999;

        return {
            totalSavings: Math.max(0, Math.round(totalSavings)),
            implementationCost: Math.round(implementationCost),
            roi: Math.round(roi * 10) / 10,
            paybackMonths: Math.min(999, Math.max(0, Math.round(paybackMonths * 10) / 10)),
            productionIncrease: Math.max(0, Math.round(productionEfficiencyGain)),
            downtimeSavings: Math.max(0, Math.round(downtimeReductionSavings)),
        };
    };

    const results = calculateROI();

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            {/* Hero Section */}
            <div className="bg-white text-gray-900 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl mb-6">
                            <Calculator className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            ROI Calculator
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Discover how much you can save by optimizing your manufacturing operations with Railes
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">

                    {/* Left: Input Form */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Production Details</h2>

                        <div className="space-y-6">
                            {/* Production Lines */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Production Lines to Monitor
                                </label>
                                <input
                                    type="number"
                                    value={productionLines}
                                    onChange={(e) => setProductionLines(Math.max(1, Number(e.target.value) || 1))}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                                    min="1"
                                />
                            </div>

                            {/* Machines */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Machines to Monitor
                                </label>
                                <input
                                    type="number"
                                    value={machines}
                                    onChange={(e) => setMachines(Math.max(1, Number(e.target.value) || 1))}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                                    min="1"
                                />
                            </div>

                            {/* Working Hours */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Working Hours per Day
                                </label>
                                <div className="flex items-center gap-4">
                                    <input
                                        type="range"
                                        value={workingHours}
                                        onChange={(e) => setWorkingHours(Number(e.target.value))}
                                        className="flex-1"
                                        min="8"
                                        max="24"
                                    />
                                    <span className="text-lg font-bold text-blue-600 w-12 text-right">{workingHours}h</span>
                                </div>
                            </div>

                            {/* Production per Week */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Production Units per Week
                                </label>
                                <input
                                    type="number"
                                    value={productionPerWeek}
                                    onChange={(e) => setProductionPerWeek(Math.max(0, Number(e.target.value) || 0))}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                                    min="100"
                                    step="100"
                                />
                            </div>

                            {/* Cost per Hour */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Average Cost per Hour (€)
                                    <span className="block text-xs font-normal text-gray-500 mt-1">
                                        Include labor, utilities, and overhead
                                    </span>
                                </label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">€</span>
                                    <input
                                        type="number"
                                        value={costPerHour}
                                        onChange={(e) => setCostPerHour(Math.max(1, Number(e.target.value) || 1))}
                                        className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                                        min="10"
                                        step="10"
                                    />
                                </div>
                            </div>

                            {/* Current OEE */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Current OEE %
                                </label>
                                <div className="flex items-center gap-4">
                                    <input
                                        type="range"
                                        value={currentOEE}
                                        onChange={(e) => {
                                            const newValue = Number(e.target.value);
                                            setCurrentOEE(newValue);
                                            if (targetOEE < newValue) {
                                                setTargetOEE(newValue);
                                            }
                                        }}
                                        className="flex-1"
                                        min="30"
                                        max="95"
                                    />
                                    <span className="text-lg font-bold text-blue-600 w-12 text-right">{currentOEE}%</span>
                                </div>
                            </div>

                            {/* Target OEE */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Target OEE % (with Railes)
                                </label>
                                <div className="flex items-center gap-4">
                                    <input
                                        type="range"
                                        value={targetOEE}
                                        onChange={(e) => setTargetOEE(Number(e.target.value))}
                                        className="flex-1"
                                        min={currentOEE}
                                        max="98"
                                    />
                                    <span className="text-lg font-bold text-pink-600 w-12 text-right">{targetOEE}%</span>
                                </div>
                            </div>

                            {/* Downtime */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Current Downtime %
                                </label>
                                <div className="flex items-center gap-4">
                                    <input
                                        type="range"
                                        value={downtime}
                                        onChange={(e) => setDowntime(Number(e.target.value))}
                                        className="flex-1"
                                        min="5"
                                        max="40"
                                    />
                                    <span className="text-lg font-bold text-red-600 w-12 text-right">{downtime}%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Results */}
                    <div className="space-y-6">
                        {/* Main ROI Card */}
                        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-2xl">
                            <div className="flex items-center gap-3 mb-4">
                                <TrendingUp className="w-6 h-6" />
                                <h3 className="text-xl font-bold">Estimated Annual ROI</h3>
                            </div>
                            <div className="text-6xl font-bold mb-2">
                                {results.roi > 0 ? '+' : ''}{results.roi}%
                            </div>
                            <p className="text-white/80">Return on Investment</p>

                            <div className="mt-6 pt-6 border-t border-white/20">
                                <div className="flex items-center justify-between">
                                    <span className="text-white/80">Payback Period</span>
                                    <span className="text-2xl font-bold">
                                        {results.paybackMonths < 999 ? `${results.paybackMonths} months` : 'N/A'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Savings Breakdown */}
                        <div className="bg-white rounded-3xl p-8 shadow-xl">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Annual Savings Breakdown</h3>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                            <Zap className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="font-semibold text-gray-700">Production Increase</span>
                                    </div>
                                    <span className="text-xl font-bold text-blue-600">
                                        €{results.productionIncrease.toLocaleString('en-US')}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                                            <Clock className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="font-semibold text-gray-700">Downtime Reduction</span>
                                    </div>
                                    <span className="text-xl font-bold text-purple-600">
                                        €{results.downtimeSavings.toLocaleString('en-US')}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-pink-50 rounded-xl border-2 border-blue-200">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-pink-600 rounded-lg flex items-center justify-center">
                                            <DollarSign className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="font-bold text-gray-900">Total Annual Savings</span>
                                    </div>
                                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                                        €{results.totalSavings.toLocaleString('en-US')}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Implementation Cost */}
                        {/* <div className="bg-gray-50 rounded-3xl p-6 border-2 border-gray-200">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600 font-semibold">Estimated Implementation Cost</span>
                                <span className="text-xl font-bold text-gray-900">
                                    €{results.implementationCost.toLocaleString()}
                                </span>
                            </div>
                        </div> */}

                        {/* CTA */}
                        <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Ready to Transform Your Production?
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Get a personalized ROI analysis from our experts
                            </p>
                            <a href="/demo" className="block w-full bg-gradient-to-r from-blue-600 to-pink-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg transition-all hover:scale-105 text-center">
                                Book a Demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
